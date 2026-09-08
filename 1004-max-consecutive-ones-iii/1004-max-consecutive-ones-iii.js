/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let low = 0;
    let res = 0;
    let noOfOnes = 0;
    for(let high = 0;high<nums.length;high++){
      if(nums[high] === 1){
        noOfOnes++;
      };
      let length = high - low + 1;
      let diff = length - noOfOnes;
      while(diff>k){
        if(nums[low] === 1){
          noOfOnes--;
        }
        low++;
        length = high - low +1;
        diff = length - noOfOnes
      }
      if(diff<=k){
        res = Math.max(res,length)
      }
      
    }
  return res
};
