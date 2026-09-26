/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    stack.push(s[0]);
    for(let i=1;i<s.length;i++){
        let top = stack[stack.length-1]
        if(top===s[i]){
            stack.pop()
        }
        else {
            stack.push(s[i])
        }
    }
    return stack.join("")
};