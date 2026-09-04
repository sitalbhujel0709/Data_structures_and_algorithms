/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    let res = []
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
            if (sortedNums[j] + sortedNums[k] === -1 * sortedNums[i]) {
                res.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                j++;
                k--;
            }
            else if (sortedNums[j] + sortedNums[k] < -1 * sortedNums[i]) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res;
};