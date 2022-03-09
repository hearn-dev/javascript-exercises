const reverseString = function(string) {
    let stringArray = [];
    
    // Add each letter to beginning of array
    for (let i=0; i<string.length; i++) {
        stringArray.unshift(string[i]);
    }

    // Convert array to string
    return stringArray.join('');

};

// Do not edit below this line
module.exports = reverseString;
