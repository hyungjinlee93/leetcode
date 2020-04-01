/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let visited = [];
    let count = 0;
    let dfs = (i) => {
        visited[i] = true;
        for (let j = 0; j < M.length; j++) {
            if (i !== j && M[i][j] === 1 && visited[j] !== true) {
                visited[j] = true;
                dfs(j);
            }
        }
    }
    for (let i = 0; i < M.length; i++) {
        if (visited[i] !== true) {
            dfs(i);
            count++;
        }
    }
    return count;
};
