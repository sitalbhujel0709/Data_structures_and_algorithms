/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let best = nums[0];
    let ans = nums[0];
    let min = nums[0]
    for(let i = 1;i<nums.length;i++){
        let v1 = nums[i];
        let v2  = best*nums[i];
        let v3 = min*nums[i];
        
        best = Math.max(v1,Math.max(v2,v3));
        min = Math.min(v1,Math.min(v2,v3));
        ans = Math.max(ans,Math.max(best,min))
    }
    return ans;
};