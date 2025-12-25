export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export function formatPrice(price: number): string {
  return price + " EUR";
}
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return mins + " min";
  if (mins === 0) return hours + "h";
  return hours + "h " + mins + "min";
}
