const findTheOldest = function(people) {
    let ages = people.map(person => ((person.yearOfDeath) ? (person.yearOfDeath) : new Date().getFullYear()) - person.yearOfBirth);
    let oldestPersonNum = 0;
    for (const i of Array(ages.length).keys()) {
        if (ages[i] > ages[oldestPersonNum]) {
            oldestPersonNum = i;
        }
    }
    return people[oldestPersonNum];
    // return ages.reduce((prev, current) => (prev > current) ? prev : current);
};

// Do not edit below this line
module.exports = findTheOldest;
