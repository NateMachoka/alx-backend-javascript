export default function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to operate on the buffer
  const view = new DataView(buffer);

  // Check if the position is valid
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  return view;
}
