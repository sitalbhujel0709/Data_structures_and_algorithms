/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
    let low = 0;
    let high = s1.length - 1;
    
    while(high<s2.length){
      if(compare(s1,s2.slice(low,high+1))){
        return true;
      }
      low++;
      high++
    }
    return false;
};
function compare(s1,s2){
    const s1Hash = new Map();
    for(let char of s1){
      s1Hash.set(char,(s1Hash.get(char)?? 0)+1)
    };
    for(let char of s2){
      if(!s1Hash.get(char)){
        return false
      }
      s1Hash.set(char,(s1Hash.get(char))-1)
    }
  return true
}