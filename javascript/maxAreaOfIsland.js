/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    let seen = [];
    let helper = (a, b) => {
        let count = 0;
        let helper2 = (i, j) => {
            count++;
            if (seen[i] === undefined) {
                seen[i] = [];
            }
            seen[i][j] = true;
            if (grid[i - 1] !== undefined && grid[i - 1][j] === 1) {
                if (seen[i - 1] === undefined || seen[i - 1][j] === undefined) {
                    helper2(i - 1, j);
                }
            }
            if (grid[i + 1] !== undefined && grid[i + 1][j] === 1) {
                if (seen[i + 1] === undefined || seen[i + 1][j] === undefined) {
                    helper2(i + 1, j);
                }
            }
            if (grid[i][j - 1] === 1) {
                if (seen[i][j - 1] === undefined) {
                    helper2(i, j - 1);
                }
            }
            if (grid[i][j + 1] === 1) {
                if (seen[i][j + 1] === undefined) {
                    helper2(i, j + 1);
                }
            }
        }
        helper2(a, b);
        max = Math.max(max, count);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1 && (seen[i] === undefined || seen[i][j] !== true)) {
                helper(i, j);
            }
        }
    }
    return max;
};
