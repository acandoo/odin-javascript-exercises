const removeFromArray = function(...args) {
    let newArr = [];
    for (const i of args[0]) {
        if (!args.includes(i, 1)) newArr.push(i);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
