/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let sumOfArr = 0;
    let bestMax = nums[0];
    let bestMin = nums[0];
    let minAns = nums[0];
    let maxAns = nums[0];
    let finalAns = nums[0]
  
    for(let i= 0; i<nums.length;i++){
      sumOfArr+=nums[i]
    }
    for(let i = 1;i<nums.length;i++){
      bestMin = Math.min(nums[i],bestMin+nums[i]);
      bestMax = Math.max(nums[i],bestMax+nums[i]);
      minAns = Math.min(bestMin,minAns);
      maxAns = Math.max(bestMax,maxAns);
      finalAns = Math.max(finalAns,Math.max(maxAns,sumOfArr-minAns))
    }
      if(maxAns<0){
        return maxAns
      }
    return finalAns
};