const string = `reverse me if you can.`;



function reverseString(input) {
  return input.split('').reverse().join("");
}

console.log(reverseString(string));