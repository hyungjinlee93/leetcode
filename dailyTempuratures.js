var dailyTemperatures = function(T) {
    let days = [];
    for (let i = 0; i < T.length; i++) {
        for(let j = i + 1; j < T.length; j++) {
            if(T[j] > T[i]) {
                days[i] = j - i;
                break;
            }
        }
        if(days[i] === undefined) {
            days.push(0);
        }
    }
    return days;
};
