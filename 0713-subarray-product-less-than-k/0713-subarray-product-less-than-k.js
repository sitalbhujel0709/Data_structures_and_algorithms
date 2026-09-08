/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = (nums,k)=>{
  let low = 0;
  let res = 0;
  let product = 1
  for(let high = 0;high<nums.length;high++){
     product *= nums[high];
    while(product>=k){
      product/=nums[low];
      low++;
    }
    res+=high-low+1;
  }
  return res<0?0:res;
}