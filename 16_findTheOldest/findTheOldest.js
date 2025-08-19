const findTheOldest = function() {
    return people.reduce((alive, dead) => {
        const currentYear = new Date().getFullYear();
        const deadPerson = dead.yearofDeath || currentYear
        const alivePerson = alive.yearofDeath || currentYear;

        const deadPersonAge = dead.yearofBirth - deadPerson;
        const alivePersonAge = alive.yearofBirth - alivePerson; 
        
        return alivePersonAge > deadPersonAge ? alive : dead;
    })


};

// Do not edit below this line
module.exports = findTheOldest;
