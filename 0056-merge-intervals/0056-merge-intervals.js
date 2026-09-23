/**
 * @param {number[][]} sortedIntervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sortedIntervals = intervals.sort((a,b)=>a[0]-b[0])
    let res = [];
    let start1=sortedIntervals[0][0];
    let end1 = sortedIntervals[0][1];
    for(let i = 1;i<sortedIntervals.length;i++){
        let start2 = sortedIntervals[i][0];
        let end2 = sortedIntervals[i][1];
        if(end1>=start2){
          
            start1=start1
            end1 = Math.max(end1,end2);
            continue;
        };
        res.push([start1,end1]);
        start1=start2;
        end1=end2
    }
    res.push([start1,end1]);
    return res
};