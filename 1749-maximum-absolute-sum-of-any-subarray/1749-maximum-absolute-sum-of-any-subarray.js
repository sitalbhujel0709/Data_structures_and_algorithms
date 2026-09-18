/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
     let max = nums[0];
  let min = nums[0];
  let ans = nums[0];

  for(let i =1;i<nums.length;i++){
    let v1 = nums[i];
    let v2 = nums[i]+max;
    let v3 = nums[i]+min
    max = Math.max(v1,v2);
    min = Math.min(v1,v3);
    ans = Math.max(Math.abs(ans),Math.max(Math.abs(max),Math.abs(min)))
  }
  return Math.abs(ans);
};