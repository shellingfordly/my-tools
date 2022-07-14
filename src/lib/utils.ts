export function formatNumber(
  num: string | number,
  fractionDigits: number
): number {
  return Number(Number(num || 0).toFixed(fractionDigits));
}
