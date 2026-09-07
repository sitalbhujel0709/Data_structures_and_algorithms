/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let low = 0;
    let res = 0;
    let str = [];
    for(let high = 0; high<s.length;high++){
      while(str.includes(s[high])){
        str.shift();
        low++;
      }
        let length = (high-low)+1;
        res = Math.max(res,length)
      str.push(s[high]);
      
    }
  return res
};