var longestPalindrome = function(s) {
    let map = new Map();
    let maxOdd = 0;
    let res = 0
    for(let c of s ){
        map.set(c,(map.get(c)??0)+1);
    }
    for(let c of map.keys()){
     
        let val = map.get(c);
        if(val%2===1){
            
            res+=val-1;
            maxOdd = Math.max(maxOdd,1);
           
        } else {
         
              
            res+=val
         
        }
    }
    return res+maxOdd
};
