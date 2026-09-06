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
    let flag= 0;
    for(let i = low;i<=high;i++){
      sum+=nums[i];
    };
    while(high<nums.length){
      if(sum<target){
        high++;
        if(high<nums.length){

        sum+=nums[high];
        }
      } else {
        flag=1
        length = Math.min((high-low+1),length)
        low++;
        sum-=nums[low-1]
      } 
    }
    return flag===0?0:length;
};