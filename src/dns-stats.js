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


domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
]

function getDNSStats(domains) {
    const counts = {};
    for (const domain of domains) {
      const parts = domain.split('.').reverse();
      console.log("Parts: " + parts);
      let current = '';
      for (const part of parts) {
        current += `.${part}`;
        console.log("Current: " + current);
        counts[current] = (counts[current] || 0) + 1;
      }
    }

    console.log("Counts: " + counts);
    return counts;
}

getDNSStats(domains);


module.exports = {
  getDNSStats
};
