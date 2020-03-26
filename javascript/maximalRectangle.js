/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;
    let area = 0;
    let helper = (a, b) => {
        let l = 1, r = 1;
        let currArea = matrix[a][b];
        while (matrix[a][b - l] >= matrix[a][b]) {
            currArea += matrix[a][b];
            l++;
        }
        while (matrix[a][b + r] >= matrix[a][b]) {
            currArea += matrix[a][b];
            r++;
        }
        return currArea;
    }
    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] === '0') {
                matrix[i][j] = 0;
            } else if (i === 0) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = matrix[i - 1][j] + 1;
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                let inc = 0;
                while (i + inc < matrix.length && matrix[i + inc][j] !== 0) {
                    let currArea = helper(i + inc, j);
                    area = Math.max(area, currArea);
                    inc++;
                }
            }
        }
    }
    return area;
};
