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
  let helper = (board, i, j, counter = 1) => {
      board[i][j] === null;
      console.log(board);
      if(word[counter] === undefined){
          return true;
      }
      if(board[i + 1] !== undefined && board[i + 1][j] === word[counter]) {
          return helper(board, i + 1, j, counter + 1);
      }
      if(board[i - 1] !== undefined && board[i - 1][j] === word[counter]) {
          return helper(board, i + 1, j, counter + 1);
      }
      if(board[i][j + 1] === word[counter]) {
          return helper(board, i + 1, j, counter + 1);
      }
      if(board[i][j - 1] === word[counter]) {
          return helper(board, i + 1, j, counter + 1);
      }
      console.log(board);
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