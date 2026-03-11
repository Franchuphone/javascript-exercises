const findTheOldest = function ( arr ) {
    arr.map( ( person ) => {
        if ( person.yearOfDeath === undefined ) {
            person.lived = new Date().getFullYear() - person.yearOfBirth;
        } else {
            person.lived = person.yearOfDeath - person.yearOfBirth;
        };
    } );
    arr.sort( ( a, b ) => b.lived - a.lived );
    return arr[ 0 ];
};

// Do not edit below this line
module.exports = findTheOldest;
