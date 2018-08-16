
/*The idea behind -
A) Kadane's Algo - Basically I have to look for all contiguous sub-arrays of size 4, and also keep track of the maximum sum contiguous sub-array until the end. Whenever I find a new contiguous sub-array, I check if the current sum is greater than the max_sum so far and updates it accordingly.
B) In the first loop is I am just generating the sum of the sub-array of the first 4 elements.
C) In the second loop, I am traversing a sliding window - at each iteration, I am deducting the first element from left and adding next element to the right. This is because we iterated k elements and going to k+1 elements. So need to remove the first element in the result to make it k elements always.
 And after doing this, updaing the max_so_far to its highest value, by comparing it to its previous hightest value.
*/

function findMaxAverage(nums, k) {

	var curr_max = 0;
	for (var i = 0; i < k; i++) {
		curr_max += nums[i];
	}

	var max_so_far = curr_max;

	for (var j = k; j < nums.length; j++) {
    curr_max += (nums[j] - nums[j - k]);
		// Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far    
		max_so_far = Math.max(curr_max, max_so_far);
	}
	return max_so_far / k;
}

const arr = [1,2,4,-1,0,3,5,6,-1,2,3,-3];
console.log(findMaxAverage(arr,3));
// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
