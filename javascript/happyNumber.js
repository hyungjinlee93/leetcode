/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    let helper = (num) => {
        if (set.has(num)) {
            return false;
        } else {
            set.add(num);
            let newNum = 0;
            while (num >= 1) {
                let place = num % 10;
                num = Math.floor(num / 10);
                newNum += place * place;
            }
            if (newNum === 1) {
                return true;
            } else {
                return helper(newNum);
            }
        }
    }
    return helper(n);
};
