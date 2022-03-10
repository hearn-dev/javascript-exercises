const palindromes = function (string) {
    let stringArray = [];

    // Remove non letter characters and uppercase
    string = string.replace(/\W/g, '').toLowerCase()
    

    // Add each letter to beginning of array
    for (let i=0; i<string.length; i++) {
        stringArray.unshift(string[i]);
    }

    // Convert array to string
    const backwards = stringArray.join('');

    // Check for equality
    return backwards == string;

};

// Do not edit below this line
module.exports = palindromes;
