/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let low = 0;
    let res = 0;
    let hashMap = new Map();
    for (let high = 0; high<fruits.length;high++ ){
      hashMap.set(fruits[high],(hashMap.get(fruits[high]) ?? 0)+1);
      while(hashMap.size>2){
        hashMap.set(fruits[low],(hashMap.get(fruits[low]) ?? 0)-1);
        if(hashMap.get(fruits[low])<1){
          hashMap.delete(fruits[low])
        };
        low++
      }
      if(hashMap.size <= 2){
        let length = (high - low)+1;
        res = Math.max(res,length);
      }
    }
      return res
};