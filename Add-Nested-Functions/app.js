// Case A: add (2,3) => 5
// Case B: add(2)(3)() => 5
// Case C: add(2)(3)(1)() => 6

/* Questions:
  1. Aguments are integers.
  2. Boundary Condition: 0< n < 10000
  3. Would have n==0;
*/


function add(...args){
  let total = args[0]; // first argument == 2
  if(args.length >  1) { 
    return args.reduce((a,b) => a + b );
  } else {
    var fxn = (...args2) => {
      if(!args2[0]) return total;
      total += args2[0]; // printing 3
      return fxn;
    }
  }
  return fxn;
}



console.log(add(2,3,9));
console.log(add(2)(3)(1)());
