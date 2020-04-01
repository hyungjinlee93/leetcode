/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let numsDict = {
        '0': true,
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true
    }
    let opsDict = {
        '*': true,
        '/': true,
        '+': true,
        '-': true
    }
    let nums = [];
    let ops = [];
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (numsDict[s[i]]) {
            str += s[i];
        } else {
            if (str.length > 0) {
                nums.push(str);
                str = '';
            }
            if (opsDict[s[i]]) {
                ops.push(s[i]);
            }
        }
    }
    if (str.length > 0) {
        nums.push(str);
    }
    let flag = '+';
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '-') {
            flag = '-';
        }
        if (ops[i] === '+') {
            flag = '+';
        }
        if (ops[i] === '/') {
            nums[i + 1] = Math.floor(Number(nums[i]) / Number(nums[i + 1]));
            nums[i] = 0;
            ops[i] = flag;
        } else if (ops[i] === '*') {
            nums[i + 1] = Number(nums[i]) * Number(nums[i + 1]);
            nums[i] = 0;
            ops[i] = flag;
        } 
    }
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            nums[i + 1] = Number(nums[i]) + Number(nums[i + 1]);
        } else if (ops[i] === '-') {
            nums[i + 1] = Number(nums[i]) - Number(nums[i + 1]);
        }
    }
    return nums[nums.length - 1];
};
