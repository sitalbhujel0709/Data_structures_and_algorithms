/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1);
    let stack = [];
    for(let i = nums.length*2-1;i>=0;i--){
        let index = i%nums.length;
        while(stack.length!==0 && nums[i]>=stack[stack.length-1]){
            stack.pop();
        }
        if( i<nums.length && stack.length!==0){
            res[i] = stack[stack.length-1]
        }
        stack.push(nums[index])
    }
    return res;
};