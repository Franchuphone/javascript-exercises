const palindromes = function ( string ) {
    const normalString = string.toLowerCase().match( /[a-z0-9]/g ).join( "" );
    const reverseString = normalString.split( "" ).reverse().join( "" );
    return reverseString === normalString;
};



// Do not edit below this line
module.exports = palindromes;
