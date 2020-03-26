/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let running = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            running++;
        } else {
            if (max < running) {
                max = running;
                running = 0;
            } else {
                running = 0;
            }
        }
    }
    if (running > max) {
        return running;
    }
    return max;
};
