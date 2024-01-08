export const weakMap = new WeakMap();

let count = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, count);
  count += 1;
  const total = weakMap.get(endPoint);
  if (total >= 5) {
    throw new Error('Endpoint load is high');
  }
}
