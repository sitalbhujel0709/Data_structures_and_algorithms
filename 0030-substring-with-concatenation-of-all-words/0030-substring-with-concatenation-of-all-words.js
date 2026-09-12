/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let freqMap = new Map();
    let res = []
    let wordLength = words[0].length;
    let totalWords = words.length;
    let windowSize = wordLength * totalWords;
    for(let word of words){
      freqMap.set(word,(freqMap.get(word)??0)+1)
    }
    let low = 0;
    let high = windowSize - 1;
    for(let offset = 0;offset<wordLength;offset++){
      let left = offset;
      let right = offset;
      let currentHash = new Map();
      while(right+wordLength<=s.length){
        let str = s.substring(right,right+wordLength);
        right = right+wordLength
        if(!freqMap.get(str)){
          left = right;
          currentHash.clear()
          continue;
        }
        currentHash.set(str,(currentHash.get(str)?? 0)+1)
        while(currentHash.get(str)>freqMap.get(str)){
          leftWord = s.substring(left,left+wordLength);
          currentHash.set(leftWord,(currentHash.get(leftWord)??0)-1);
          if(currentHash.get(leftWord)===0){
            currentHash.delete(leftWord)
          }
          left+=wordLength;
        }
        if(right-left === windowSize){
          res.push(left)
        }
      }
    }
  return res
};