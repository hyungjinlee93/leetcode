/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let visited = new Set();
    let helper = (n) => {
        if (n === 1) {
            return true;
        } else if (visited.has(n)) {
            return false;
        }
        if (memo[n] !== undefined) {
            if (memo[n] === false) {
                return false;
            }
            visited.add(n);
            return helper(memo[n]);
        } else {
            visited.add(n);
            let n2 = n;
            let m = 0;
            while (n !== 0) {
                m += (n % 10) * (n % 10);
                n = Math.floor(n / 10);
            }
            memo[n2] = m;
            return helper(m);
        }
    }
    if (helper(n)) {
        visited.forEach(item => {
            memo[item] = 1;
        });
        return true;
    } else {
        visited.forEach(item => {
            memo[item] = false;
        });
        return false;
    }
};
var memo = {};
