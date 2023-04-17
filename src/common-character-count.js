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
function getCommonCharacterCount(s1, s2) {
  // Create character frequency maps for both strings using a helper function
  const charMap1 = createCharMap(s1);
  const charMap2 = createCharMap(s2);
  
  // Initialize a variable to keep track of the number of common characters
  let commonCharCount = 0;
  
  // Iterate through each character in the first character map
  for (let char in charMap1) {
    // Check if the second character map has the same character
    if (charMap2.hasOwnProperty(char)) {
      // Add the minimum frequency of the character in both maps to the common character count
      commonCharCount += Math.min(charMap1[char], charMap2[char]);
    }
  }

  // Define a helper function to create a character frequency map for a given string
  function createCharMap(str) {
    const charMap = {};
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    
    console.log(charMap);
    return charMap;
  }

  console.log(charMap1, charMap2);

  return commonCharCount;
  //add to the count if they are common 
}

let num = getCommonCharacterCount('aabcc', 'adcaa');
console.log(num);

module.exports = {
  getCommonCharacterCount
};
