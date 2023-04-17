const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (options.addition === undefined) {
        options.addition = '';
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }
    let result = '';
    for (let i = 0; i < options.repeatTimes; i++) {
       
        result += str;
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            result += options.addition;
            if (j < options.additionRepeatTimes - 1) {
                result += options.additionSeparator;
            }
        }
        if(i < options.repeatTimes - 1){
          result += options.separator;
        }
    }
    
    return result;
}

module.exports = {
  repeater
};
