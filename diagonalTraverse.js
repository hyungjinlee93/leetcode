/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === undefined) {
        return matrix;
    }
    if (matrix[0].length === 1) {
        return matrix.map(element => element[0]);
    }
    let direction = 'up';
    let diagonal = [];
    let m = 0;
    let n = 0;
    while(m !== matrix.length - 1 || n !== matrix[0].length - 1){
        if (direction === 'up') {
            diagonal.push(matrix[m][n]);
            if (m === 0 || n === matrix[0].length - 1) {
                if (n === matrix[0].length - 1) {
                    m++;
                } else {
                    n++;
                }
                direction = 'down';
            } else {
                m--;
                n++;
            }
        } else {
            diagonal.push(matrix[m][n]);
            if (n === 0 || m === matrix.length - 1) {
                if (m === matrix.length - 1) {
                    n++;
                } else {
                    m++;
                }
                direction = 'up';
            } else {
                m++;
                n--;
            }
        }
    }
    diagonal.push(matrix[m][n]);
    return diagonal;
};
