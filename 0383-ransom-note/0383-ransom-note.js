/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let mapA = new Map();
    let mapB = new Map();

    for(let c of ransomNote){
        mapA.set(c,(mapA.get(c)??0)+1);
    }
    for(let c of magazine){
        mapB.set(c,(mapB.get(c)??0)+1);
    }
    for(let c of ransomNote){
        let a = mapA.get(c) ?? 0;
        let b = mapB.get(c) ?? 0;
        if(a>b){
            return false;
        }
    }
    return true

};