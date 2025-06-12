const palindromes = function (str) {
    if (typeof str !== "string") return "ERROR";

    // remove characters
    let newStr = [];
    const filteredChars = [",", ".", "!", " ", ";", ":", "-"];
    for (const i of str) {
        if (!filteredChars.includes(i)) newStr.push(i.toLowerCase());
    }

    // not efficient but who cares this is javascript
    for (const i of Array(newStr.length).keys()) {
        if (newStr[i] !== newStr[newStr.length - 1 - i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
