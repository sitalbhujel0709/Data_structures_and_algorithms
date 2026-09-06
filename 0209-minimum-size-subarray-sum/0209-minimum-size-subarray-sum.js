/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let low = 0;
    let high = 0;
    let length = Infinity;
    let totalSum= 0;
    for (let i = low;i<nums.length;i++){
      totalSum+=nums[i];
    }
    for(let i = low;i<=high;i++){
      sum+=nums[i];
    };
    if(totalSum<target){
      console.log("hello")
      length = 0;
      return length;
    }
    while(high<nums.length){
      if(sum<target){
        high++;
        sum+=nums[high];
      } else {
        length = Math.min((high-low+1),length)
        low++;
        sum-=nums[low-1]
      } 
    }
    return length;
};