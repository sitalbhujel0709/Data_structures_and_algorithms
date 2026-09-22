/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let length = 0;
    let map = new Map();
    let zero = 0;
    let one = 0;

    for (let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? zero++ : one++;
        let diff = zero - one;
        if (diff === 0) {
            length = i + 1;
        } else {
            mapIndex = map.get(diff);
            if (mapIndex!==undefined) {
                length = Math.max(length, i - mapIndex);
            } else {
                map.set(diff, i)
            }
        }

    }
    return length;
};