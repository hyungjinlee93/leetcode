/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length / 2; i++) {
        for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[matrix.length - 1 - j][i];
            matrix[matrix.length - 1 - j][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
            matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[j][matrix.length - 1 - i];
            matrix[j][matrix.length - 1 - i] = temp;
        }
    }
    return matrix;
};
