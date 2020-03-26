/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let islandBomber = (i, j) => {
        if (j === undefined) {
            grid[i] = '0';
            if (grid[i - 1] === '1') {
                islandBomber(i - 1);
            }
            if (grid[i + 1] === '1') {
                islandBomber(i + 1);
            }
        } else {
            grid[i][j] = '0';
            if (grid[i - 1] !== undefined && grid[i - 1][j] === '1') {
                islandBomber(i - 1, j);
            }
            if (grid[i + 1] !== undefined && grid[i + 1][j] === '1') {
                islandBomber(i + 1, j);
            }
            if (grid[i][j - 1] === '1') {
                islandBomber(i, j - 1);
            }
            if (grid[i][j + 1] === '1') {
                islandBomber(i, j + 1);
            }
        }
    }
    if (grid.length === 0) {
        return count;
    } else if (grid[0].length === undefined) {
        for (let i = 0; i < grid.length; i++) {
            if (grid[i] === '1') {
                count++;
                islandBomber(i);
            }
        }
    } else {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === '1') {
                    count++;
                    islandBomber(i, j);
                }
            }
        }
    }
    return count;
};
