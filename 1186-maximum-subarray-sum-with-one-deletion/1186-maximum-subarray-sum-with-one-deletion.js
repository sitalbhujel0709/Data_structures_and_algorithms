/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
   let prevNotdel = arr[0];
   let prevWithdel = 0;
   let max = arr[0];
   for(let i = 1; i<arr.length;i++){
     prevWithdel = Math.max(prevNotdel,prevWithdel+arr[i]);
     prevNotdel = Math.max(prevNotdel+arr[i],arr[i])
     let current = Math.max(prevNotdel,prevWithdel);
     max = Math.max(current,max);
   }
   return max
};