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
    //if members is not array
    if (!Array.isArray(members)) {
     return false;
    }

    // check if members are not empty
    if (members.length === 0) {
     return false;
    }

    // create empty string
    let str = '';

    // loop through array of strings
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] ==='string') {
        str += members[i].trim()[0].toUpperCase();
      } 
    }
    
    // join array of strings to create dream team
    return str.split('').sort().join('');
    
  }

module.exports = {
  createDreamTeam
};
