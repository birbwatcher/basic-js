const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

 function getCommonCharacterCount(x,y) {
  let array1 = x.split('');
  let array2 = y.split('');
  let counter = 0;
  for (i=0;i<array2.length;i++) {
    if (array1.includes(array2[i])) {
      array1.splice(array1.indexOf(array2[i]),1)
      counter++;
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
