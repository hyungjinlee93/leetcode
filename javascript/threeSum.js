/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let solutions = [];
    for (let l = 0; l < nums.length - 2 && nums[l] <= 0; l++) {
        if (nums[l] === nums[l - 1]) {
            continue;
        } else if (nums[l] === 0) {
            if (nums[l + 1] === 0 && nums[l + 2] === 0) {
                solutions.push ([0,0,0]);
                break;
            }
        } else {
            let r = nums.length - 1;
            let m = l + 1;
            while (m < r) {
                let sum = nums[l] + nums[m] + nums[r];
                if (sum === 0) {
                    solutions.push([nums[l], nums[m], nums[r]]);
                    m++;
                    r--;
                    while (nums[r] === nums[r + 1]) {
                        r--;
                    }
                    while (nums[m] === nums[m - 1]) {
                        m++;
                    }
                } else if (sum > 0) {
                    r--;
                    while (nums[r] === nums[r + 1]) {
                        r--;
                    }
                } else if (sum < 0) {
                    m++;
                    while (nums[m] === nums[m - 1]) {
                        m++;
                    }
                }
            }
        }
    }
    return solutions;
};
