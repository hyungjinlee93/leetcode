/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = {};
    let output = [];
    for (let i = 0; i < words.length; i++) {
        if (map[words[i]] === undefined) {
            map[words[i]] = 1;
            output.push(words[i]);
        } else {
            map[words[i]]++;
        }
    }
    output.sort((a, b) => {
        if (map[a] === map[b]) {
            if (a < b) {
                return -1;
            } else {
                return 1;
            }
        } else {
            return map[b] - map[a]
        }
    });
    return output.slice(0, k);
};
