const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let board = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        if (typeof matrix[i - 1] !== 'undefined') {
          let row = board[i - 1];
          if (typeof row[j - 1] !== 'undefined') {
            board[i - 1][j - 1] += 1;
          }
          if (typeof row[j] !== 'undefined') {
            board[i - 1][j] += 1;
          }
          if (typeof row[j + 1] !== 'undefined') {
            board[i - 1][j + 1] += 1;
          }
        }
        if (typeof matrix[i + 1] !== 'undefined') {
          let row = board[i + 1];
          if (typeof row[j - 1] !== 'undefined') {
            board[i + 1][j - 1] += 1;
          }
          if (typeof row[j] !== 'undefined') {
            board[i + 1][j] += 1;
          }
          if (typeof row[j + 1] !== 'undefined') {
            board[i + 1][j + 1] += 1;
          }
        }
        if (typeof board[i][j - 1] !== 'undefined') {
          board[i][j - 1] += 1;
        }
        if (typeof board[i][j + 1] !== 'undefined') {
          board[i][j + 1] += 1;
        }
      }
    }
  }
  return board;
}

module.exports = {
  minesweeper
};
