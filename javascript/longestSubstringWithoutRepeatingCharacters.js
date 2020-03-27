/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length;
    }
    let left = 0, right = 1, max = 0;
    let set = new Set();
    set.add(s[left]);
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            max = Math.max(right - left, max);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    return max + 1;
};
