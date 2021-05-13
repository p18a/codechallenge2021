/**
 * Clear NaN for input values
 */
export function formatNumber(num: number) {
  return Number.isNaN(num) ? '' : num.toString();
}

export function formatDuration(t: number) {
  // So horrible it's funny
  return [t >= 1 ? `${Math.floor(t)}h` : null, t % 1 > 1 / 60 ? `${((t % 1) * 60).toFixed()}min` : null].join(' ');
}

export function formatFuel(f: number) {
  return Number.isNaN(f) ? '' : `${f.toFixed(2)}l`;
}
