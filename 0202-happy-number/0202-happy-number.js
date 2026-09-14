/**
 * @param {number} n
 * @return {boolean}
 */
function fun(n){
    let sum = 0;
    while(n>0){
        let d = n%10;
        n = Math.floor(n/10);
        sum = sum+d*d
    }
    return sum
}
var isHappy = function(n) {
    let slow = n;
    let fast = n;
    while(fast!==1){
        slow = fun(slow);
        fast = fun(fast);
        fast = fun(fast);
        if(slow === fast && slow!=1){
            return false
        }
    }
    return true
};