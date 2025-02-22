export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if (needle === v) {
      return true;
    } else if (needle < v) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi)

  return false;
}
