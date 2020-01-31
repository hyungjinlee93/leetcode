/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (nums.length === 0) {
        return 0;
    }
    let min = +Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        if(sum >= s) {
            return 1;
        }
        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= s) {
                if (j + 1 - i < min) {
                    min = j + 1 - i;
                }
                break;
            }
            if (j === nums.length - 1 && i === 0) {
                if (min === +Infinity) {
                    return 0;
                }
                return min;
            }
        }
    }
    return min;
};
