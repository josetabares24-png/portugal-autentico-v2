import { ArrowUpRight, Camera, Clock3, Moon, ShieldCheck, Sun, Sunset, TrainFront, UtensilsCrossed, X } from 'lucide-react';
import type { ReactNode } from 'react';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import type { TravelerGuideTool as TravelerGuideToolData } from '@/data/traveler-guide-preview';

type ToolRow = TravelerGuideToolData['rows'][number];

function RowWrapper({
  row,
  portalId,
  className,
  children,
}: {
  row: ToolRow;
  portalId: string;
  className: string;
  children: ReactNode;
}) {
  if (!row.href) return <div className={className}>{children}</div>;

  return (
    <TrackedInternalLink
      href={row.href}
      contentType="guide_practical_tool"
      contentId={`${portalId}_${row.primary}`}
      className={`${className} group relative`}
    >
      {children}
      <ArrowUpRight
        size={17}
        strokeWidth={1.8}
        className="absolute right-1 top-1/2 -translate-y-1/2 text-taupe transition-all group-hover:-translate-y-[60%] group-hover:translate-x-0.5 group-hover:text-terracotta"
        aria-hidden="true"
      />
    </TrackedInternalLink>
  );
}

function RoutesTool({ tool, portalId }: { tool: TravelerGuideToolData; portalId: string }) {
  return (
    <div className="border-t border-night/15">
      {tool.rows.map((row) => (
        <RowWrapper key={row.primary} row={row} portalId={portalId} className="grid min-h-28 grid-cols-[5.5rem_1fr] gap-x-5 border-b border-night/15 py-5 pr-8 sm:grid-cols-[7rem_0.55fr_1.45fr] sm:items-center sm:gap-7">
          <span className="font-display text-2xl font-semibold text-terracotta sm:text-3xl">{row.primary}</span>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-night">{row.secondary}</span>
          <span className="col-start-2 mt-2 font-body text-sm leading-relaxed text-text-secondary sm:col-start-auto sm:mt-0">{row.tertiary}</span>
        </RowWrapper>
      ))}
    </div>
  );
}

function MobilityTool({ tool, portalId }: { tool: TravelerGuideToolData; portalId: string }) {
  return (
    <div className="border-y border-night/15">
      <div className="hidden grid-cols-[1fr_0.72fr_1.35fr] gap-6 border-b border-night/15 py-3 font-body text-[0.65rem] uppercase tracking-[0.16em] text-taupe md:grid">
        {tool.columns.map((column) => <span key={column}>{column}</span>)}
      </div>
      {tool.rows.map((row) => (
        <RowWrapper key={row.primary} row={row} portalId={portalId} className="grid gap-2 border-b border-night/15 py-6 pr-8 last:border-b-0 md:grid-cols-[1fr_0.72fr_1.35fr] md:items-center md:gap-6">
          <span className="font-display text-xl font-semibold text-night">{row.primary}</span>
          <span className="flex items-center gap-2 font-body text-sm font-semibold text-[#287080]">
            <TrainFront size={17} strokeWidth={1.8} aria-hidden="true" />
            {row.secondary}
          </span>
          <span className="font-body text-sm leading-relaxed text-text-secondary">{row.tertiary}</span>
        </RowWrapper>
      ))}
    </div>
  );
}

function VisitTool({ tool, portalId }: { tool: TravelerGuideToolData; portalId: string }) {
  return (
    <div className="grid border-l border-t border-night/15 sm:grid-cols-2">
      {tool.rows.map((row) => (
        <RowWrapper key={row.primary} row={row} portalId={portalId} className="min-h-60 border-b border-r border-night/15 p-6 pr-10 sm:p-8 sm:pr-11">
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#A87830]">{row.primary}</span>
          <span className="mt-5 block font-display text-2xl font-semibold leading-tight text-night">{row.secondary}</span>
          <span className="mt-4 block font-body text-sm leading-relaxed text-text-secondary">{row.tertiary}</span>
        </RowWrapper>
      ))}
    </div>
  );
}

function FoodTool({ tool, portalId }: { tool: TravelerGuideToolData; portalId: string }) {
  return (
    <div className="border-y border-night/15">
      {tool.rows.map((row) => (
        <RowWrapper key={row.primary} row={row} portalId={portalId} className="grid gap-3 border-b border-night/15 py-6 pr-8 last:border-b-0 md:grid-cols-[0.65fr_0.85fr_1.5fr] md:items-baseline md:gap-8">
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#617052]">{row.primary}</span>
          <span className="flex items-center gap-2 font-display text-xl font-semibold text-night">
            <UtensilsCrossed size={16} strokeWidth={1.7} className="text-[#617052]" aria-hidden="true" />
            {row.secondary}
          </span>
          <span className="font-body text-sm leading-relaxed text-text-secondary">{row.tertiary}</span>
        </RowWrapper>
      ))}
    </div>
  );
}

function DrinksTool({ tool, portalId }: { tool: TravelerGuideToolData; portalId: string }) {
  return (
    <div className="relative border-y border-night/15 before:absolute before:bottom-8 before:left-[0.72rem] before:top-8 before:w-px before:bg-[#765064]/35 sm:before:left-[5.45rem]">
      {tool.rows.map((row) => (
        <RowWrapper key={row.primary} row={row} portalId={portalId} className="grid grid-cols-[1.5rem_1fr] gap-x-4 border-b border-night/15 py-6 pr-8 last:border-b-0 sm:grid-cols-[5rem_1.05fr_1.45fr] sm:items-center sm:gap-7">
          <span className="relative z-10 flex items-center bg-cream font-body text-xs font-semibold uppercase tracking-[0.1em] text-[#765064]">
            <Clock3 size={15} strokeWidth={1.8} className="mr-2 hidden sm:block" aria-hidden="true" />
            {row.primary}
          </span>
          <span className="font-display text-xl font-semibold text-night">{row.secondary}</span>
          <span className="col-start-2 mt-1 font-body text-sm leading-relaxed text-text-secondary sm:col-start-auto sm:mt-0">{row.tertiary}</span>
        </RowWrapper>
      ))}
    </div>
  );
}

const lightIcons = [Sun, Sun, Sunset, Moon];

function SpotsTool({ tool, portalId }: { tool: TravelerGuideToolData; portalId: string }) {
  return (
    <div className="grid border-l border-t border-night/15 sm:grid-cols-2 lg:grid-cols-4">
      {tool.rows.map((row, index) => {
        const Icon = lightIcons[index] ?? Camera;
        return (
          <RowWrapper key={row.primary} row={row} portalId={portalId} className="min-h-64 border-b border-r border-night/15 p-6 pr-10">
            <Icon size={23} strokeWidth={1.6} className="mb-7 text-[#46647D]" aria-hidden="true" />
            <span className="font-body text-xs uppercase tracking-[0.15em] text-[#46647D]">{row.primary}</span>
            <span className="mt-3 block font-display text-xl font-semibold text-night">{row.secondary}</span>
            <span className="mt-4 block font-body text-sm leading-relaxed text-text-secondary">{row.tertiary}</span>
          </RowWrapper>
        );
      })}
    </div>
  );
}

function SafetyTool({ tool, portalId }: { tool: TravelerGuideToolData; portalId: string }) {
  return (
    <div className="border-y border-night/15">
      {tool.rows.map((row) => (
        <RowWrapper key={row.primary} row={row} portalId={portalId} className="grid gap-3 border-b border-night/15 py-6 pr-8 last:border-b-0 md:grid-cols-[0.85fr_0.9fr_1.25fr] md:items-center md:gap-8">
          <span className="font-display text-xl font-semibold text-night">{row.primary}</span>
          <span className="flex items-start gap-2 font-body text-sm font-semibold leading-relaxed text-[#617052]">
            <ShieldCheck size={17} strokeWidth={1.8} className="mt-0.5 flex-none" aria-hidden="true" />
            {row.secondary}
          </span>
          <span className="flex items-start gap-2 font-body text-sm leading-relaxed text-text-secondary">
            <X size={16} strokeWidth={1.8} className="mt-0.5 flex-none text-[#9B493F]" aria-hidden="true" />
            {row.tertiary}
          </span>
        </RowWrapper>
      ))}
    </div>
  );
}

export default function TravelerGuideTool({ portalId, tool }: { portalId: string; tool: TravelerGuideToolData }) {
  const tools = {
    routes: RoutesTool,
    mobility: MobilityTool,
    visit: VisitTool,
    food: FoodTool,
    drinks: DrinksTool,
    spots: SpotsTool,
    safety: SafetyTool,
  } as const;
  const Tool = tools[portalId as keyof typeof tools] ?? RoutesTool;

  return (
    <section id="herramienta-practica" className="scroll-mt-20 border-b border-taupe/20 bg-cream py-16 md:py-22">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-12">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">{tool.eyebrow}</p>
            <h2 className="max-w-xl font-display text-3xl font-semibold not-italic leading-tight tracking-normal text-night md:text-4xl">
              {tool.title}
            </h2>
          </div>
          <p className="max-w-xl font-body text-sm leading-[1.75] text-text-secondary md:justify-self-end md:text-base">
            {tool.intro}
          </p>
        </div>

        <Tool tool={tool} portalId={portalId} />
      </div>
    </section>
  );
}
