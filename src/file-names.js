const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let fileObject = {};
  return names.reduce((acc, cur) => {
    if (!fileObject[cur]) {
      fileObject[cur] = 0;
    }
    fileObject[cur]++;

    if (fileObject[cur] === 1 && !`${cur}`.match(/\d/)) {
      acc.push(cur);
    } else if (`${cur}`.match(/\d/)) {

      if (acc.includes((`${cur}`))) {
        acc.push(cur.concat(`(${fileObject[cur]})`));
      } else {
        acc.push(cur);
      }
    } else {
      acc.push(cur.concat(`(${fileObject[cur] - 1})`));
    }
    return acc;
  }, []);
}

module.exports = {
  renameFiles
};
