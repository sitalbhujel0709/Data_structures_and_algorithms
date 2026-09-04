/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let positiveArr = [];
    let negativeArr = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            negativeArr.push(nums[i]);
        }
        else{
            positiveArr.push(nums[i])
        }
    }
    if(negativeArr.length === 0){
        let res = [];
        for(let i = 0; i<positiveArr.length;i++){
            res[i] = positiveArr[i]*positiveArr[i];
        }
        return res;
    }
    else if(positiveArr.length === 0){
        let res = [];
        for(let i = 0; i<negativeArr.length;i++){
            res[i] = negativeArr[i]*negativeArr[i]
        }
        return res.reverse();
    }else {
        let sqNegative = negativeArr.map((num)=>num*num).reverse();
        let sqPositive = positiveArr.map((num)=>num*num);
        let res = [];
        let index = 0;
        let i = 0;
        let j = 0;
        while(i<sqNegative.length && j<sqPositive.length){
            if(sqNegative[i]<sqPositive[j]){
                res[index] = sqNegative[i];
                i++;
                index++;
            } else {
                res[index] = sqPositive[j];
                j++;
                index++;
            }
        }
        while(i<sqNegative.length){
            res[index] = sqNegative[i];
            i++;
            index++;

        }
        while(j<sqPositive.length){
            res[index] = sqPositive[j];
            j++;
            index++;
        }
        return res;
    }
};