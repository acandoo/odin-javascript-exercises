const reverseString = function(string) {
    let newString = '';
    for (const char of string) {
        newString = char + newString;
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
