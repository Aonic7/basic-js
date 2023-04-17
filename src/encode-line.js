const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  let char = str[0];
  //check if string is empty
  if(str.length === 0){
    return result;
  }

  for (let i = 1; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    } else {
      result += count + char;
      count = 1;
      char = str[i];
    }
  }
  result += count + char;

  //remove one character
  for(let i = 0; i < result.length; i++){
    if(result[i] === '1'){
      result = result.slice(0, i) + result.slice(i + 1);
    }
  }
  return result;
}

let a = encodeLine("xsssddaaw");
console.log(a);

module.exports = {
  encodeLine
};
