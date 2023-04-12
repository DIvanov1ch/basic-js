const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members === null
    || members === undefined
    || members.length === 0
    || !Array.isArray(members)) {
    return false;
  }
  return members
    .filter(item => item && typeof item === 'string')
    .map(item => item.trim().toUpperCase())
    .sort()
    .reduce((acc, cur) => acc.concat(cur[0]), '');
}

module.exports = {
  createDreamTeam
};
