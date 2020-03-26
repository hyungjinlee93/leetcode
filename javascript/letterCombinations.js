/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') {
        return [];
    }
    let combos = [];
    let map = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    }
    let helper = (index = 0, str = '') => {
        let letters = map[digits[index]];
        if (index === digits.length - 1) {
            for (let i = 0; i < letters.length; i++) {
                combos.push(str + letters[i]);
            }
        } else {
            for (let i = 0; i < letters.length; i++) {
                helper(index + 1, str + letters[i]);
            }
        }
    }
    helper();
    return combos;
};
