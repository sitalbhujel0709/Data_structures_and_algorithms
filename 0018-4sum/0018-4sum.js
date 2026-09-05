/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = [];
    const sortedNums = nums.sort((a, b) => a - b)
    for(let i = 0; i<nums.length-3;i++){
        if(i>0 && nums[i]===nums[i-1]) continue;
        for(let j = i+1;j<nums.length-2;j++){
            if(j>i+1 && nums[j]===nums[j-1]) continue;
            let halfTarget = target-(nums[i]+nums[j])
            let left = j+1;
            let right = nums.length - 1;
             while (left < right) {
            if(left>j+1 && sortedNums[left] === sortedNums[left-1]){
                left++;
                continue
            }
            if( (right<nums.length-1 && sortedNums[right] === sortedNums[right+1])){
                right--;
                continue;
            }
            if (sortedNums[left] + sortedNums[right] === halfTarget) {
                res.push([sortedNums[i], sortedNums[left], sortedNums[right], sortedNums[j]]);
                left++;
                right--;
            } else if (sortedNums[left] + sortedNums[right] < halfTarget) {
                left++;
            } else {
                right--;
            }
        }
        }
    }
    return res
};