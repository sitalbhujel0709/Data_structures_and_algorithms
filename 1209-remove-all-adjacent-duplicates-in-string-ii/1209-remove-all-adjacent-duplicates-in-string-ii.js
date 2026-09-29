/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    stack.push([s[0],1])
    for(let i = 1;i<s.length;i++){
      if(stack.length===0 || s[i]!==stack[stack.length-1][0]){
        stack.push([s[i],1])
      }
      else if(s[i]===stack[stack.length-1][0] && stack[stack.length-1][1]===k-1){
        stack.pop()
      }
      else if(s[i]===stack[stack.length-1][0] && stack[stack.length-1][1]!==k-1){
        stack[stack.length-1][1] = stack[stack.length-1][1] + 1;
      }
     
    }
  let res="";
  stack.forEach(arr=>{
    
    for(let i = 0;i<arr[1];i++){
      res+=arr[0]
    }
  })
  return res
};