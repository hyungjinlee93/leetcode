var generateParenthesis = function(n) {
    let parens = [];
    let helper = (s = '', left = n, right = n) => {
        if (left === 0 && right === 0) {
            parens.push(s);
        } else if (left === right) {
            helper(s + '(', left - 1, right);
        } else if (left >= 0 && right >= 0){
            if (left === 0) {
                helper(s + ')', left, right - 1);
            } else if (right > left) {
                helper(s + '(', left - 1, right);
                helper(s + ')', left, right - 1);
            }
        }
    }
    helper();
    return parens;
};
