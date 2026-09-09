/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function compare(sHash,tHash){
  for(const [key,value] of tHash){
    if(!sHash.has(key)||sHash.get(key)<tHash.get(key)){
      return false
    }
  }
    return true;
}
var minWindow = function(s, t) {
    let sHash = new Map();
    let tHash = new Map();
    for(let i = 0;i<t.length;i++){
      tHash.set(t[i],(tHash.get(t[i]) ?? 0)+1)
    }
    let low = 0;
    let startIndex = 0;
    let endIndex = 0;
    let res = Infinity
    for(let high = 0; high<s.length;high++){
      sHash.set(s[high],(sHash.get(s[high]) ?? 0)+1);
      while(compare(sHash,tHash)){
        console.log(s[low])
        
        length  = high - low +1;
        if(length < res){
          res = length;
          startIndex = low;
        endIndex = high+1
        }
        sHash.set(s[low],(sHash.get(s[low]) ?? 0)-1);
        if(sHash.get(s[low]) < 1){
          sHash.delete(s[low])
        }
        low++;
      }
    }
  return s.slice(startIndex,endIndex)
};

