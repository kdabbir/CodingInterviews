
// Kadane’s algorithm - The most efficient time-complexity

// We can easily solve this problem in linear time using Kadane’s;s algorithm. The idea is to maintain maximum (positive sum) sub-array ending at each index of the given array. This subarray is either empty (in which case its sum is zero) or consists of one more element than the maximum subarray ending at the previous index.

// The time complexity of above solution is O(n) and auxiliary space used by the program is O(1)

// Simple idea of the Kadane’s algorithm is to look for all positive contiguous segments of the array (max_ending_here is used for this). And keep track of maximum sum contiguous segment among all positive segments (max_so_far is used for this). Each time we get a positive sum compare it with max_so_far and update max_so_far if it is greater than max_so_far

// Initialize: max_so_far = 0 max_ending_here = 0

// Loop for each element of the array (a) max_ending_here = max_ending_here + a[i] (b) if(max_ending_here < 0) max_ending_here = 0 (c) if(max_so_far < max_ending_here) max_so_far = max_ending_here

// return max_so_far

/* If the solution specifically requires, that if the list is made up of only negative numbers or an empty list is given, zero should be returned - then few more lines can be added to explicitly take care of that. */
let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0)

var maxSequence = function(arr){
  if(arr.length === 0 || allNegatives(arr)) return 0;
  if(allPositives(arr)) return sum(arr);

  var curr_max = 0, max_so_far = 0;

  for(var i = 0; i < arr.length; i++){  
    curr_max = Math.max(0, curr_max + arr[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  }
  return max_so_far;
}
const arr = [1,2,4,-1,0,3,5,6,-1,2,3,-3];
console.log(maxSequence(arr));
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])); // returns 0
console.log(maxSequence([])); // returns 0
console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4])); // returns 23

