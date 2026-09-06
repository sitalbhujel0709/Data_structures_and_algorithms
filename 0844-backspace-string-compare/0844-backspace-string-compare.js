/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let res1="";
    let res2="";

    for(let i = 0; i<s.length;i++){
        if(s[i]==="#"){
            let arr = res1.split("");
            arr.pop();
            res1 = arr.join("") 
        }
        else{
        res1+=s[i];
        }
    }
    for(let i = 0; i<t.length;i++){
        if(t[i]==="#"){
            let arr = res2.split("");
            arr.pop()
            res2 = arr.join("")
        }
        else{
            res2+=t[i]
        }
    }
    return res1===res2
};