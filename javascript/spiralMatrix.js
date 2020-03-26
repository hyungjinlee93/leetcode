/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return [];
    }
    if (matrix[0].length === undefined) {
        return matrix;
    }
    if (matrix[0].length === 1) {
        return matrix.map(row => row[0]);
    }
    let spiral = [];
    let helper = (m, n) => {
        let layer = m;
        if (m === Math.floor(matrix.length / 2)) {
            while (n < matrix[0].length - layer) {
                spiral.push(matrix[m][n]);
                n++;
            }
        } else if (n === Math.floor(matrix[0].length / 2)) {
            while (m < matrix.length - layer) {
                spiral.push(matrix[m][n]);
                m++;
            }
        } else {
            while (n < matrix[0].length - layer && n >= layer) {
                spiral.push(matrix[m][n]);
                n++;
            }
            n--;
            m++;
            while (m < matrix.length - layer && m >= layer) {
                spiral.push(matrix[m][n]);
                m++;
            }
            m--;
            n--;
            while (n >= 0 + layer) {
                spiral.push(matrix[m][n]);
                n--;
            }
            n++;
            m--;
            while (m > layer) {
                spiral.push(matrix[m][n]);
                m--;
            }
        }
    }
    for(let i = 0; i < Math.min(Math.floor(matrix[0].length) / 2, Math.floor(matrix.length) / 2); i++) {
        helper(i, i);
    }
    return spiral;
};
