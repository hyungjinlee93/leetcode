/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let times = [];
    for (let i = 0; i < timePoints.length; i++) {
        let time = Number(timePoints[i].substring(0, 2) * 60) + Number(timePoints[i].substring(3, 5));
        if (times[time] === true) {
            return 0;
        }
        times[time] = true;
    }
    let low = 0;
    let last = -Infinity;
    let flag = true;
    let min = +Infinity;
    for (let i = 0; i < times.length; i++) {
        if (times[i] === true) {
            if (flag) {
                low = i;
                flag = false;
            }
            min = Math.min(min, i - last);
            last = i;
        }
    }
    min = Math.min(min, low + 60 * 24 - last);
    return min;
};
