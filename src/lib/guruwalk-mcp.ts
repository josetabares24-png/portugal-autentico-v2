import 'server-only';

const GURUWALK_MCP_URL = 'https://back.guruwalk.com/mcp/affiliates';
const PROTOCOL_CANDIDATES = ['2025-06-18', '2025-03-26', '2024-11-05'] as const;

type JsonRpcId = number | string;

interface JsonRpcSuccess<T> {
  jsonrpc: '2.0';
  id: JsonRpcId;
  result: T;
}

interface JsonRpcError {
  jsonrpc: '2.0';
  id: JsonRpcId | null;
  error: {
    code: number;
    message: string;
    data?: unknown;
  };
}

type JsonRpcResponse<T> = JsonRpcSuccess<T> | JsonRpcError;

interface InitializeResult {
  protocolVersion: string;
  capabilities: Record<string, unknown>;
  serverInfo?: {
    name?: string;
    version?: string;
  };
}

interface McpTextContent {
  type: 'text';
  text: string;
}

interface ToolCallResult {
  content: Array<McpTextContent | { type: string; [key: string]: unknown }>;
  isError?: boolean;
}

export interface GuruWalkPlace {
  id: number;
  name: string;
  slug: string;
  country: string;
  has_free_tours: boolean;
}

export interface GuruWalkCategory {
  id: number;
  name: string | null;
  url: string;
}

export interface GuruWalkProduct {
  id: number;
  name: string;
  slug: string;
  rating_out_of_5: number;
  reviews_count: number;
  image_url: string | null;
  url: string;
}

export interface GuruWalkDiscoverDestination {
  place: GuruWalkPlace;
  pagination: {
    page: number;
    per_page: number;
    total_count: number;
  };
  categories: GuruWalkCategory[];
  featured_products: GuruWalkProduct[];
}

export interface GuruWalkAvailabilityEvent {
  event_id: number;
  start_time: string;
  language: string;
  last_seats: boolean;
  booking_url: string;
}

export interface GuruWalkAvailability {
  tour_id: number;
  from_date: string;
  to_date: string;
  dates: Record<string, GuruWalkAvailabilityEvent[]>;
}

function getApiKey(): string {
  const key = process.env.GURUWALK_MCP_API_KEY?.trim();
  if (!key) {
    throw new Error('GURUWALK_MCP_API_KEY is not configured');
  }
  return key;
}

function parseMcpBody<T>(raw: string): JsonRpcResponse<T> | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('{')) {
    return JSON.parse(trimmed) as JsonRpcResponse<T>;
  }

  const dataLines = trimmed
    .split(/\r?\n/)
    .filter((line) => line.startsWith('data:'))
    .map((line) => line.slice(5).trim())
    .filter((line) => line && line !== '[DONE]');

  for (const line of dataLines) {
    try {
      return JSON.parse(line) as JsonRpcResponse<T>;
    } catch {
      // Ignore non-JSON SSE frames and keep looking.
    }
  }

  throw new Error('GuruWalk MCP returned an unsupported response format');
}

async function postMcp<T>(
  body: Record<string, unknown>,
  protocolVersion?: string
): Promise<JsonRpcResponse<T> | null> {
  const response = await fetch(GURUWALK_MCP_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getApiKey()}`,
      'Content-Type': 'application/json',
      Accept: 'application/json, text/event-stream',
      ...(protocolVersion ? { 'MCP-Protocol-Version': protocolVersion } : {}),
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  const raw = await response.text();

  if (!response.ok) {
    throw new Error(`GuruWalk MCP HTTP ${response.status}: ${raw.slice(0, 300)}`);
  }

  return parseMcpBody<T>(raw);
}

async function initialize(): Promise<string> {
  let lastError: unknown;

  for (const candidate of PROTOCOL_CANDIDATES) {
    try {
      const response = await postMcp<InitializeResult>({
        jsonrpc: '2.0',
        id: 1,
        method: 'initialize',
        params: {
          protocolVersion: candidate,
          capabilities: {},
          clientInfo: {
            name: 'estaba-en-lisboa',
            version: '1.0.0',
          },
        },
      });

      if (!response || 'error' in response) {
        throw new Error(
          response && 'error' in response
            ? `GuruWalk MCP initialize failed: ${response.error.message}`
            : 'GuruWalk MCP initialize returned no result'
        );
      }

      const negotiated = response.result.protocolVersion || candidate;

      // MCP clients normally send this notification after initialize.
      // GuruWalk runs stateless mode; an empty response is valid here.
      await postMcp(
        {
          jsonrpc: '2.0',
          method: 'notifications/initialized',
          params: {},
        },
        negotiated
      );

      return negotiated;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error('Could not initialize GuruWalk MCP');
}

async function callTool<T>(
  name: 'discover_destination' | 'browse_category' | 'check_availability',
  args: Record<string, unknown>
): Promise<T> {
  const protocolVersion = await initialize();

  const response = await postMcp<ToolCallResult>(
    {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name,
        arguments: args,
      },
    },
    protocolVersion
  );

  if (!response) throw new Error('GuruWalk MCP returned no tool result');
  if ('error' in response) {
    throw new Error(`GuruWalk MCP tool error: ${response.error.message}`);
  }

  if (response.result.isError) {
    const text = response.result.content
      .filter((item): item is McpTextContent => item.type === 'text')
      .map((item) => item.text)
      .join('\n');
    throw new Error(text || `GuruWalk MCP tool ${name} failed`);
  }

  const firstText = response.result.content.find(
    (item): item is McpTextContent => item.type === 'text'
  );

  if (!firstText) {
    throw new Error(`GuruWalk MCP tool ${name} returned no text content`);
  }

  return JSON.parse(firstText.text) as T;
}

export async function discoverGuruWalkDestination(params: {
  destination: string;
  language?: 'en' | 'es' | 'de' | 'it';
  startDate?: string;
  endDate?: string;
  page?: number;
}): Promise<GuruWalkDiscoverDestination> {
  return callTool<GuruWalkDiscoverDestination>('discover_destination', {
    destination: params.destination,
    language: params.language ?? 'es',
    page: params.page ?? 1,
    ...(params.startDate ? { start_date: params.startDate } : {}),
    ...(params.endDate ? { end_date: params.endDate } : {}),
  });
}

export async function checkGuruWalkAvailability(params: {
  tourId: number;
  fromDate: string;
  toDate: string;
  language?: 'en' | 'es' | 'de' | 'it';
}): Promise<GuruWalkAvailability> {
  return callTool<GuruWalkAvailability>('check_availability', {
    tour_id: params.tourId,
    from_date: params.fromDate,
    to_date: params.toDate,
    language: params.language ?? 'es',
  });
}

export function hasGuruWalkAffiliateRef(url: string): boolean {
  try {
    return Boolean(new URL(url).searchParams.get('ref'));
  } catch {
    return false;
  }
}
