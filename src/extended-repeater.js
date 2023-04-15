const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }
  if (typeof str !== 'string') {
    str = String(str);
  }
  if (options.hasOwnProperty('addition')) {
    if (typeof options.addition !== 'string') {
      options.addition = String(options.addition);
    }
    str = str.concat(new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator));
  }
  return new Array(options.repeatTimes).fill(str).join(options.separator);
}

module.exports = {
  repeater
};
