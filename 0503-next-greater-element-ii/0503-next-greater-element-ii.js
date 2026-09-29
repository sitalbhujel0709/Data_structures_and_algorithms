/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1);
    let n = nums.length;
    let stack = [];
    for(let i = n-2;i>=0;i--){
        stack.push(nums[i])
    }
    for(let i =n-1;i>=0;i--){
       
        while(stack.length!==0 && nums[i]>=stack[stack.length-1]){
            stack.pop();
        }
        if( stack.length!==0){
            res[i] = stack[stack.length-1]
        }
        stack.push(nums[i])
    }
    return res;
};