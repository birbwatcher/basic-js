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
 function createDreamTeam(array) {
  let result;
    if (Array.isArray(array)) {
    let cleanArray = array.map(function(item){
      if (typeof item === 'string') {
      return item.split(' ').join('').toUpperCase();
       }
     });
      return result = cleanArray.sort().filter((x) => x != undefined).map((item)=> item[0]).join('')
    }
    else return false;
  } 

module.exports = {
  createDreamTeam
};
