/** Convert an existing editorial date; never infer publication from an update. */
export function toIsoEditorialDate(value?: string): string | undefined {
  if (!value) return undefined;
  const months: Record<string, number> = {
    ene: 1, feb: 2, mar: 3, abr: 4, may: 5, jun: 6,
    jul: 7, ago: 8, sep: 9, oct: 10, nov: 11, dic: 12,
  };
  const text = value.trim();
  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const spanish = text.match(/^(\d{1,2})\s+([a-záéíóú]+)\s+(\d{4})$/i);
  if (!iso && !spanish) return undefined;
  const year = Number(iso ? iso[1] : spanish![3]);
  const month = iso ? Number(iso[2]) : months[spanish![2].toLowerCase()];
  const day = Number(iso ? iso[3] : spanish![1]);
  if (year < 1000 || !month || month > 12 || day < 1 || day > 31) return undefined;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return undefined;
  return date.toISOString().slice(0, 10);
}
