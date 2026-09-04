/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const sortedNums = nums.sort((a, b) => a - b);
    let least_diff = Infinity;
    let output;
    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }
        let j = i+1;
        let k = sortedNums.length - 1;
        while (j < k) {

            if (j > i+1 && sortedNums[j] === sortedNums[j - 1]) {
                j++;
                continue;
            }
            if (k < sortedNums.length - 1 && sortedNums[k] === sortedNums[k + 1]) {
                k--;
                continue;
            }
            let sum = sortedNums[i]+sortedNums[j] + sortedNums[k]
            if (sum === target) {
                least_diff = 0;
                output = sum
                j++;
                k--;
            }
            else if (sum < target
            ) {
                if(Math.abs(sum-target) < least_diff){

                least_diff = Math.abs(sum-target);
                output = sum;
                }
                j++;
            } else {
                if(Math.abs(sum-target) < least_diff){

                 least_diff = Math.abs(sum-target);
                output = sum;
                }
                k--;
            }
        }
    }
    return output;
};