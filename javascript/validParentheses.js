/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else if (s[i] === '[') {
            stack.push('[');
        } else if (s[i] === '{') {
            stack.push('{');
        } else if (s[i] === ')') {
            if (stack.pop() !== '(') {
                return false;
            }
        } else if (s[i] === ']') {
            if (stack.pop() !== '[') {
                return false;
            }
        } else if (s[i] === '}') {
            if (stack.pop() !== '{') {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};
