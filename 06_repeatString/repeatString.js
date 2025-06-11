const repeatString = function(string, num) {
    if (num > 0) {
        return repeatString(string, num - 1) + string;
    }
    if (num < 0) {
        return "ERROR";
    }
    return "";
};

// Do not edit below this line
module.exports = repeatString;
