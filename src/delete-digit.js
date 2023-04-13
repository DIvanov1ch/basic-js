const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = n.toString().split('');
  let max = +digits[0];
  for (let i = 0; i < digits.length; i++) {
    let current = digits.filter((digit, index) => index !== i).join('');
    if (+current > max) {
      max = +current;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
