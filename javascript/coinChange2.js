/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if (amount === 0) return 1;
    if (coins.length === 1 && amount % coins[0] === 0) return 1;
    if (coins.length === 1 && amount % coins[0] !== 0) return 0;
    let combs = [1];
    for (let i = 1; i <= amount; i++) {
        combs[i] = 0;
    }
    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            let add = j - coins[i] >= 0 ? combs[j - coins[i]] : 0;
            combs[j] += add;
        }
    }
    return combs[amount];
};
