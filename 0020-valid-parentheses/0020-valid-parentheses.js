/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
            continue;
        }
         if ((s[i] === ')' && top === '(') || (s[i] === '}' && top === '{') || (s[i] === ']' && top === '[')) {
            stack.pop();
            continue
        } 
        else {
            return false
        }        
         if (
            (s[i] === ')' || s[i] === '}' || s[i] === ']') && stack.length === 0
        ) {
            return false;
        };

    }
    if (stack.length > 0) {
        return false
    } else {
        return true
    }
};