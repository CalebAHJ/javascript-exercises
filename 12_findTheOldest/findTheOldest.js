const findTheOldest = function(people) {
    return people.reduce((lastPerson, nextPerson) => {
        if (nextPerson.yearOfDeath == null) {
            nextPerson.yearOfDeath = (new Date()).getUTCFullYear();
        }
        const lastAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
        const nextAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        return (lastAge > nextAge) ? lastPerson : nextPerson;
    }, {name: "", yearOfBirth: 0, yearOfDeath: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
