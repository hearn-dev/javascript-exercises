const removeFromArray = (...args) => {
    const arr = args[0]
    return arr.filter(val => !args.includes(val));
}

    


// Do not edit below this line
module.exports = removeFromArray;
