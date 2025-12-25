export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export function formatPrice(price: number): string {
  return price + " EUR";
}
