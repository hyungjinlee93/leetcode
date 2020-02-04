/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let col = matrix[0].length - 1;
    let row = 0;
    while(row < matrix.length && col >= 0) {
        if (target === matrix[row][col]) {
            return true;
        } else if (target < matrix[row][col]) {
            col -= 1;
        } else if (target > matrix[row][col]) {
            row += 1;
        }
    }
    return false;
};
