/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rows = [];
    let helper = () => {
        if (rows.length === 0) {
            rows.push([1]);
        } else if (rows.length === 1) {
            rows.push([1, 1]);
        } else {
            let row = [1];
            for (let i = 1; i < rows[rows.length - 1].length; i++) {
                row[i] = rows[rows.length - 1][i] + rows[rows.length - 1][i - 1];
            }
            row.push(1);
            rows.push(row);
        }
    }
    while(rows.length !== numRows) {
        helper();
    }
    return rows;
};
