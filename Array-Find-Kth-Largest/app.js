var findKthLargest = function (nums, k) {
  nums.sort((a, b) => (b-a));
  return nums[k-1];
};

const test = [3, 2, 1, 5, 6, 4];
console.log(findKthLargest(test, 2));