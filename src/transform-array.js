const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let transformed = arr.slice();  // copy arr
  let controls = [];
  for (let item of arr) {
    if (typeof item === 'string') {
      controls.push(item);
    }
  }

  let indexes = [];
  while (controls.length !== 0) {
    let control = controls.shift();
    let index = arr.indexOf(control);

    switch (control) {

      case '--discard-next':
        if (index === transformed.length - 1) {
          indexes.push(index);
          break;
        }
        indexes.push(index);
        indexes.push(index + 1);
        break;

      case '--discard-prev':
        if (index === 0) {
          indexes.push(0);
          break;
        }
        indexes.push(index);
        indexes.push(index - 1);
        break;

      case '--double-next':
        if (index === transformed.length - 1) {
          indexes.push(index);
          break;
        }
        if (indexes.includes(index + 1)) {
          indexes.push(index);
          break;
        }
        let next = transformed[index + 1];
        transformed.splice(index, 1, next);
        break;

      case '--double-prev':
        if (index === 0) {
          indexes.push(0);
          break;
        }
        if (indexes.includes(index - 1)) {
          indexes.push(index);
          break;
        }
        let prev = transformed[index - 1];
        transformed.splice(index, 1, prev);
        break;
    }
  }
  
  indexes.sort((a, b) => a - b);
  let indexSet = new Set(indexes);
  indexes = [...indexSet];

  while (indexes.length !== 0) {
    let i = indexes.pop();
    transformed.splice(i, 1);
  }
  return transformed;
}

module.exports = {
  transform
};
