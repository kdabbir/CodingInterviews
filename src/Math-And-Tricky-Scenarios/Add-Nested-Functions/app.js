// Case A: add (2,3) => 5
// Case B: add(2)(3)() => 5
// Case C: add(2)(3)(1)() => 6

/* Questions:
  1. Aguments are integers.
  2. Boundary Condition: 0< n < 10000
  3. Would have n==0;
*/


//new solution

let add = (...args) => {
	let sum = 0;
	//condition for more than 1 argument
	if(args.length > 1){
		return args.reduce( (a,b) => a+b);
	}
	sum += args[0];

	//condition for 1 arg
	return closureFn = (...args2) => {
		 if(!args2[0]) { return sum};
		 sum += args2[0];
		 return closureFn;
	}
	
};



// //old solution
// function add(...args){
//   let total = args[0]; // first argument == 2
//   if(args.length >  1) { 
//     return args.reduce((a,b) => a + b );
//   } else {
//     var fxn = (...args2) => {
//       if(!args2[0]) return total;
//       total += args2[0]; // printing 3
//       return fxn;
//     }
//   }
//   return fxn;
// }

function addNormalize(arr, sum=0, depth=1) {
  for(let i=0; i< arr.length; i++) {
      const cur = arr[i];
      if (Array.isArray(cur)) {
          sum += addNormalize(cur, sum, depth+1);
      } else {
          sum+=cur * depth;
      }
  }
  return sum;
}



console.log(add(2,3,9));
console.log(add(2)(3)(1)());
