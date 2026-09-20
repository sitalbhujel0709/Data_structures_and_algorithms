/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    for(let i = 0;i<nums.length;i++){
        sum+=nums[i];
    }
    let left = 0;
    let right = sum-left-nums[0];
    if(left===right){
      return 0
    }
    for(let i = 1;i<nums.length;i++){
        left+=nums[i-1];
        right = sum-nums[i]-left;
        if(left===right){
            return i
        }

    }
    return -1;
};