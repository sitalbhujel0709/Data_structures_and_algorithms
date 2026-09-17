/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let best = nums[0];
    let ans = nums[0];
    for(let i = 1; i<nums.length;i++){
        let v1 = nums[i];
        let v2 = best+nums[i]
         best = Math.max(v1,v2);
         ans = Math.max(ans,best)
    }
    return ans;
};