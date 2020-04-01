/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                s = s.substring(0, i) + s.substring(i + 1);
                i--;
            } else {
                stack.pop();
            }
        }
    }
    while (stack.length > 0) {
        let j = stack.pop();
        s = s.substring(0, j) + s.substring(j + 1);
    }
    return s;
};
