
export default function multiplyUnsigned(number1, number2) {
  let result = 0;

  // Let's treat number2 as a multiplier for the number1.
  let multiplier = number2;

  // Multiplier current bit index.
  let bitIndex = 0;

  // Go through all bits of number2.
  while (multiplier !== 0) {
    // Check if current multiplier bit is set.
    if (multiplier & 1) {
      // In case if multiplier's bit at position bitIndex is set
      // it would mean that we need to multiply number1 by the power
      // of bit with index bitIndex and then add it to the result.
      result += (number1 << bitIndex);
    }

    bitIndex += 1;
    multiplier >>= 1;
  }

  return result;
}
