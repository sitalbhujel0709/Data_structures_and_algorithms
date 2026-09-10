/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let frequencyArr1 = Array(256).fill(0);
    let frequencyArr2 = Array(256).fill(0);
    for(let i = 0;i<p.length;i++){
      frequencyArr1[p[i].charCodeAt(0)]++;
    }
    let low = 0;
    let high = p.length - 1;
    console.log(high)
    let res = [];
    if(s.length<p.length){
      return res;
    }
    const compare = (a,b)=>a.every((v,i)=>v===b[i]);
    while(high<s.length){
      for(let i = low;i<=high;i++){
        frequencyArr2[s[i].charCodeAt(0)]++;
      }
      if(compare(frequencyArr1,frequencyArr2)){
        res.push(low)
      }
      low++;
      high++;
      frequencyArr2 = Array(256).fill(0);
    }
    return res;
};

