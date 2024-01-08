export default function hasValuesFromarr(set, arr) {
  return arr.every((item) => set.has(item));
}
