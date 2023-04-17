const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Filter the sorted values that are not -1
  const sortedValues = arr.filter((value) => value !== -1).sort((a, b) => a - b);
  console.log(sortedValues);
  // Initialize the index of the sorted array
  let sortedIndex = 0;
  // Initialize the result array
  const result = [];
  // Iterate over the input array
  for (let i = 0; i < arr.length; i++) {
    // If the current value is -1, append it to the result array
    if (arr[i] === -1) {
      result.push(arr[i]);
    // If the current value is not -1, append the next sorted value to the result array
    } else {
      result.push(sortedValues[sortedIndex]);
      sortedIndex++;
    }
  }
  // Return the result array
  return result;
}

console.log(sortByHeight([-1, 150, -1, 190, 170, -1]));

module.exports = {
  sortByHeight
};
