/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(memo[n]) {
        return memo[n];
    }
    let stairs = climbStairs(n - 2) + climbStairs(n - 1);
    memo[n] = stairs;
    return stairs;
};

var memo = {
    '1': 1,
    '2': 2,
    '3': 3
}
