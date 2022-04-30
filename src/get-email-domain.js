const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email){
  let result = '';
    for (i=email.length - 1;email[i] != '@';i--) {
      result = email[i] + result;
    }
  return result;
}

module.exports = {
  getEmailDomain
};
