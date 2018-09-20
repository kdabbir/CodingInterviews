// // Case A: add (2,3) => 5
// // Case B: add(2)(3)() => 5
// // Case C: add(2)(3)(1)() => 6

// /* Questions:
//   1. Aguments are integers.
//   2. Boundary Condition: 0< n < 10000
//   3. Would have n==0;
// */

// let nestedFn = (...args) => {
// 	let sum = 0;
// 	//condition for more than 1 argument
// 	if(args.length > 1){
// 		return args.reduce( (a,b) => a+b);
// 	}
// 	sum += args[0];

// 	//condition for 1 arg
// 	return closureFn = (...args2) => {
// 		 if(!args2[0]) { return sum};
// 		 sum += args2[0];
// 		 return closureFn;
// 	}
	
// };


// console.log(nestedFn(2,3));
// console.log(nestedFn(2)(3)());
// console.log(nestedFn(2)(3)(1)());


//----------------
