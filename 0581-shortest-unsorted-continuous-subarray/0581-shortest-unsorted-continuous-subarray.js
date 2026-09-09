/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let min = Infinity;
    let max = -Infinity;

    while(left<nums.length && nums[left]<=nums[left + 1]){
        left++
    }
    if(left === nums.length-1){
        return 0
    }
    while(right>0 && nums[right]>=nums[right - 1]){
        right--;
    }
    for(let i = left;i<=right;i++){
        min = Math.min(min,nums[i])
        max = Math.max(max,nums[i])
    };

    while(left>0 && nums[left - 1]>min){
        left--;
    }
    while(right<nums.length-1 && nums[right + 1]<max){
        right ++;
    }
    return right - left + 1;
};