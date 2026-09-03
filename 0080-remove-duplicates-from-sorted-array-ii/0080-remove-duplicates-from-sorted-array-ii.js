/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0; 
    let j = 1;
    let k = 1;
    let unique = 1;
    while (j<nums.length){
        if(nums[j] === nums[j-1]){
            if(unique < 2){
            nums[i+1] = nums[j];
            i++;
            k++;
            unique++
            }
            j++;
        } else {
            nums[i+1] = nums[j];
            i++;
            j++;
            k++;
            unique = 1;
        }
    }
    return k
};