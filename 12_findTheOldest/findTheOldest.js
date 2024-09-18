const findTheOldest = function(arr) {
    let currentYear = new Date();
    let oldest = arr.map(person => {
        if(!person['yearOfDeath']){
            person.yearOfDeath = currentYear.getFullYear(); 
        }

        person.age = person.yearOfDeath - person.yearOfBirth;

        return person;
    }).sort((a,b) => a.age > b.age ? -1 : 1).splice(0, 1);

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
