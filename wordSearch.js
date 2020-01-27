/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if(word.length === 0 || word === undefined) {
      return false;
  }
  let startLetter = word[0];
  let locs = [];
  let helper = (grid, i, j, counter = 1, visited = {}) => {
      visited[i+','+j] = true;
      if(word[counter] === undefined){
          return true;
      }
      let ip1 = i + 1;
      let im1 = i - 1;
      let jp1 = j + 1;
      let jm1 = j - 1;
      if(grid[i + 1] !== undefined && !visited[ip1 + ',' + j] && grid[i + 1][j] === word[counter]) {
          if(helper(grid, i + 1, j, counter + 1, visited)) {
              return true;
          }
      }
      if(grid[i - 1] !== undefined && !visited[im1 + ',' + j] && grid[i - 1][j] === word[counter]) {
          if(helper(grid, i - 1, j, counter + 1, visited)) {
              return true;
          }
      }
      if(!visited[i + ',' + jp1] && grid[i][j + 1] === word[counter]) {
          if (helper(grid, i, j + 1, counter + 1, visited)) {
              return true;
          }
      }
      if(!visited[i + ',' + jm1] && grid[i][j - 1] === word[counter]) {
          if (helper(grid, i, j - 1, counter + 1, visited)) {
              return true;
          }
      }
      delete visited[i+','+j];
      return false;
  }
  for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
          if(board[i][j] === startLetter) {
              if(word.length === 1) {
                  return true;
              }
              locs.push([i, j]);
          }
      }
  }
  for(let k = 0; k < locs.length; k++) {
      if(helper(board.slice(), locs[k][0], locs[k][1])) {
          return true;
      }
  }
  return false;
};