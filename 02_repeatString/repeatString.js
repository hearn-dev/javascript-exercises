const repeatString = function(string, num) {
    try {
        return string.repeat(num);
    } catch(e) {
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = repeatString;
