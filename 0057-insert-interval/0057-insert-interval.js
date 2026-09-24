/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let newIntervals = [];
    let res = []
    let insert = false;
    if(intervals.length === 0){
        newIntervals.push(newInterval)
    }
    for(let i = 0;i<intervals.length;i++){
        if(intervals[i][0]>=newInterval[0] && insert===false){
            newIntervals.push(newInterval)
        };
        newIntervals.push(intervals[i]);
    }
    if(insert===false){
        newIntervals.push(newInterval)
    }
    let start1 = newIntervals[0][0];
    let end1= newIntervals[0][1];
    for(let i = 1;i<newIntervals.length;i++){
        let start2 = newIntervals[i][0];
        let end2 = newIntervals[i][1];

        if(end1>=start2){
            start1 = start1;
            end1 = Math.max(end1,end2);
            continue;
        };
        res.push([start1,end1])
        start1 = start2
        end1 = end2
    }
    res.push([start1,end1])
    return res
};