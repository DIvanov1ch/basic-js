const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let splitted = domains.map(domain => domain.split('.').reverse());
  return splitted.map(item => {
    let reversed = [];
    for (let i = 0; i < item.length; i++) {
      let domain = '';
      for (let j = 0; j <= i; j++) {
        domain += '.'.concat(item[j]);
      }
      reversed.push(domain);
    }
    return reversed;
  }).reduce((flattened, cur) => flattened.concat(cur), [])
    .reduce((resultObject, domain) => {
      if (!resultObject[domain]) {
        resultObject[domain] = 0;
      }
      resultObject[domain]++;
      return resultObject;
    }, {});
}

module.exports = {
  getDNSStats
};
