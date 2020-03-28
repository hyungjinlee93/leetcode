/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let bannedSet = new Set();
    let words = {};
    let word = '';
    for (let i = 0; i < banned.length; i++) {
        bannedSet.add(banned[i]);
    }
    paragraph = paragraph.split(/[^a-z]/gi);
    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i].length === 0) {
            continue;
        }
        let itWord = paragraph[i].toLowerCase();
        if (!bannedSet.has(itWord)) {
            if (words[itWord] !== undefined) {
                words[itWord]++;
                if (words[itWord] > words[word]) {
                    word = itWord;
                }
            } else {
                words[itWord] = 1;
                if (word.length === 0) {
                    word = itWord;
                } else {
                    if (words[itWord] > words[word]) {
                        word = itWord;
                    }
                }
            }
            
        }
    }
    return word;
};
