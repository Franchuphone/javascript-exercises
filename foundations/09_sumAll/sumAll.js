const sumAll = function ( num1, num2 ) {
    let arr = [ num1, num2 ];
    if ( !Number.isInteger( num1 ) || !Number.isInteger( num2 ) ) return "ERROR";
    if ( num2 < num1 ) { arr = [ num2, num1 ] };
    if ( arr[ 0 ] < 0 ) return "ERROR";

    let result = 0;
    for ( let i = arr[ 0 ]; i <= arr[ 1 ]; i++ ) {
        result += i;
    }
    return result;
}

// Do not edit below this line
module.exports = sumAll;
