/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 1) return intervals
    intervals.sort((a, b) => a[0] - b[0])
    let res = [];
    for (let i = 0; i < intervals.length;) {
        let t = intervals[i][1], j = i + 1
        while (j < intervals.length && intervals[j][0] <= t) {
            t = Math.max(intervals[j][1], t)
            j = j + 1
        }
        res.push([intervals[i][0], t])
        i = j;
    }
    return res;
};