const findTheOldest = (people) => {
    let oldest;
    let oldestAge = 0;
    for (let i=0;i<people.length;i++) {
        let personAge = (people[i].yearOfDeath - people[i].yearOfBirth);
        let death = 'yearOfDeath';

        if (!people[i].hasOwnProperty(death)) {
            personAge = ((new Date().getFullYear()) - people[i].yearOfBirth);
        }
        if (personAge > oldestAge) {
            oldestAge = personAge;
            oldest = people[i];
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
