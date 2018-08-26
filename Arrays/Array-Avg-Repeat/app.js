
const input2 = [1,1,2,3];

// * Problem: Average of all the numbers in the array except for repeating numbers.
// * For example:
// * Input: [1,1,2,3]
// * Result: 1+2+3/4; (i.e 6/4)
// */
const avgArrayNumbers = (arr) => {
  const length = arr.length;
  const hashMap = {};
  let sum = 0;
  input2.map( (value) => {
    if(!hashMap[value] && hashMap[value]!=0){
      hashMap[value] = value;
      sum+=value;
    }});
  return sum/length;
}


console.log(avgArrayNumbers(input2));