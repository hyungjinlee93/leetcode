/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let visited = new Set();
    let perms = [];
    let helper = (perm = []) => {
        for (let i = 0; i < nums.length; i++) {
            if (!visited.has(nums[i])) {
                visited.add(nums[i]);
                perm.push(nums[i]);
                if (perm.length === nums.length) {
                    perms.push(perm.slice());
                } else {
                    helper(perm);
                }
                visited.delete(nums[i]);
                perm.pop();
            }
        }
    }
    helper();
    return perms;
};
