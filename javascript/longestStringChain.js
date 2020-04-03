/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let set = {};
    let memo = {};
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            set[words[i].substring(0, j) + '*' + words[i].substring(j + 1)] = words[i];
        }
    }
    let helper = (word) => {
        if (memo[word] !== undefined) {
            return memo[word];
        } else {
            let count = 1;
            for (let i = 0; i <= word.length; i++) {
                let search = word.substring(0, i) + '*' + word.substring(i);
                if (set[search] !== undefined) {
                    count = Math.max(count, 2, helper(set[search]) + 1);
                }
            }
            memo[word] = count;
            return count;
        }
    }
    for (let i = 0; i < words.length; i++) {
        max = Math.max(helper(words[i]), max);
    }
    return max;
};
