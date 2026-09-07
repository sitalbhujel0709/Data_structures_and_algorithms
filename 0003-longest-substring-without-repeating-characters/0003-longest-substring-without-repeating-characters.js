/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let low = 0;
    let res = 0;
    let hashMap = new Map();
    for(let high = 0; high<s.length;high++){
       hashMap.set(s[high],(hashMap.get(s[high]) ?? 0)+1);
        let k = high - low + 1;
      while(hashMap.size < k){
        hashMap.set(s[low],(hashMap.get(s[low]) ?? 0)-1);
        if((hashMap.get(s[low]) ?? 0) < 1){
          hashMap.delete(s[low])
        };
        low++;
        k = high-low+1;
      }
      if(hashMap.size === k){
        res = Math.max(k,res)
      }
      
    }
  return res
};