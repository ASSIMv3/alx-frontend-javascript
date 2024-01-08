export default function createInt8TypedArray(len, position, value) {
  const buffer = new ArrayBuffer(len);
  const view = new DataView(buffer);

  if (position >= view.length) {
    throw new Error('Position outside range');
  }
  view[position] = value;
  return new DataView(buffer);
}
