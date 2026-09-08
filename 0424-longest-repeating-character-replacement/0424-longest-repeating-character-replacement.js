/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let max = -Infinity;
    let res = 0;
    let low = 0;
    let arr = [];
    function maxNum(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!Number.isNaN(arr[i]) && arr[i] > max) {
                max = arr[i];
            }
        }
        return max
    }
    for (let high = 0; high < s.length; high++) {
        let index = s[high].charCodeAt(0);
        arr[index] = (arr[index] ?? 0) + 1;
        let length = high - low + 1;
        let diff = length - maxNum(arr);

        while (diff > k) {
            let index = s[low].charCodeAt(0);
            arr[index] -= 1;
            low++;
            length = high-low+1;
            diff = length - maxNum(arr);

        }
        if(diff <= k){
            res = Math.max(res,length)
        }
    }
    return res
};