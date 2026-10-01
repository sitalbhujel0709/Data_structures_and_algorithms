/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Map();
  for(let c of s){
    map.set(c,(map.get(c) ?? 0)+1);
  }
  for(let c of s){
    const char = map.get(c);
    if(char === 1){
        return s.indexOf(c)
    }
  }
  return -1;
};