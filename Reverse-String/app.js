const string = `reverse me if you can.`;


//v1
function reverseString(input) {
  return input.split('').reverse().join("");
}
//without in-built functions

function reverseStringV2(input) {
  if(!input) return "";
  let reverseString ="";
  for(let i=input.length-1; i>= 0;i--){
    reverseString += input[i];
  }
  return reverseString;
} 


console.log(reverseString(string));
console.log(reverseStringV2(string));