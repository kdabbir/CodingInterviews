
var twoSum = function(nums, target) {
    let hashMap = {};
    for(let i=0; i<nums.length;i++){
        let complement = target - nums[i];
        if(hashMap[complement]>=0){
            return [hashMap[complement], i];
        }
        hashMap[nums[i]] = i;
    }
    return [];
};