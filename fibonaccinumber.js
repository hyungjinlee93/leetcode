/**
 * @param {number} N
 * @return {number}
 */

var memoy = {
    '0': 0,
    '1': 1,
    '2': 1
};

var fib = function(N) {
    console.log(N);
    if (memoy[N] !== undefined) {
        return memoy[N];
    }
    let val = fib(N - 1) + fib(N - 2);
    memoy[N] = val;
    return val;
};
