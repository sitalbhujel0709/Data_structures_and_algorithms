/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let mapA = new Map();
    let mapB = new Map();
    let word = "balloon"
    let res = Infinity
    for(let c of word){
        mapA.set(c,(mapA.get(c)??0)+1);
    }
    for(let c of text){
        mapB.set(c,(mapB.get(c)??0)+1)
    };
    for(let c of word){
        let a = mapA.get(c);
        let b = mapB.get(c) ?? 0;
        res = Math.min(res,Math.floor(b/a))
    }
    return res

};