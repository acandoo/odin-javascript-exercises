const sumAll = function(x, y) {
    if (!(typeof x === "number" && typeof y === "number")) {
        return "ERROR";
    }
    if (!(Number.isInteger(x) && Number.isInteger(y))) {
        return "ERROR";
    }
    if (x + y !== Math.abs(x + y)) {
        return "ERROR";
    }
    const biggerNum = (x > y) ? x : y;
    const smallerNum = (x < y) ? x : y;
    return [...Array(biggerNum + 1).keys()]
        .splice(smallerNum)
        .reduce((partialSum, a) => partialSum + a);
};

// Do not edit below this line
module.exports = sumAll;
