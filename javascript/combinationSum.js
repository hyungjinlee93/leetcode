/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let set = [];
    let helper = (index, sum = 0, solution = []) => {
        for (let i = index; i < candidates.length; i++) {
            if (sum + candidates[i] < target) {
                sum += candidates[i];
            }
        }
    }
};
