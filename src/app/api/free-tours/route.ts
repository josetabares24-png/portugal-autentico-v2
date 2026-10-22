import { loadLiveTours } from "@/lib/live-free-tours";
import { unstable_cache } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import logger from "@/lib/logger";
import {
  checkGuruWalkAvailability,
  discoverGuruWalkDestination,
} from "@/lib/guruwalk-mcp";
import type { LiveFreeToursResponse } from "@/types/guruwalk-live";

export const runtime = "nodejs";

const MAX_ADVANCE_DAYS = 180;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function lisbonToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Lisbon",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function addDays(date: string, days: number) {
  const value = new Date(`${date}T12:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

const getLiveToursForDate = unstable_cache(
  async (date: string, language: "es" | "en") =>
    loadLiveTours(date, language, {
      discover: discoverGuruWalkDestination,
      availability: checkGuruWalkAvailability,
    }),
  ["guruwalk-lisboa-live-v3-language"],
  { revalidate: 900, tags: ["guruwalk-lisboa-live"] },
);

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date")?.trim() ?? "";
  const language = request.nextUrl.searchParams.get("language") ?? "es";
  if (language !== "es" && language !== "en") {
    return NextResponse.json(
      { error: "Unsupported tour language." },
      { status: 400 },
    );
  }
  const today = lisbonToday();
  const lastAllowedDate = addDays(today, MAX_ADVANCE_DAYS);

  if (!ISO_DATE.test(date) || date < today || date > lastAllowedDate) {
    return NextResponse.json(
      {
        error:
          language === "en"
            ? "Choose a valid date within the next six months."
            : "Elige una fecha válida dentro de los próximos seis meses.",
      },
      { status: 400 },
    );
  }

  try {
    const tours = await getLiveToursForDate(date, language);
    const payload: LiveFreeToursResponse = { date, tours, source: "guruwalk" };
    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    logger.error("[free-tours-live] GuruWalk request failed", {
      type: error instanceof Error ? error.name : "UnknownError",
    });
    return NextResponse.json(
      {
        error:
          language === "en"
            ? "We could not load times right now."
            : "No pudimos consultar los horarios en este momento.",
      },
      { status: 503 },
    );
  }
}
