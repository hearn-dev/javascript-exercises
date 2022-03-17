const caesar = (string, num) => {
    let solved = '';
    for (let i=0; i<string.length; i++) {
        let ascii = string[i].charCodeAt()
        while (num > 26) {
            num -= 26;
        }

        // Positive shifts
        if (num >= 0){
            // Shift uppercase, maintaining case
            if (ascii >= 65 && ascii <= 90) {
                if (ascii + num > 90) {
                    let extra = ((ascii + num) - 90);
                    solved += String.fromCharCode(64+extra)
                } else {
                    solved += String.fromCharCode((ascii+num));
                }
            // Shift lowercase, maintaining case
            } else if (ascii >= 97 && ascii <= 122) {
                if (ascii + num > 122) {
                    let extra = ((ascii + num) - 122);
                    solved += String.fromCharCode(96+extra)
                } else {
                solved += String.fromCharCode((ascii+num));
                } 
            // Add non-alphabetic characters unchanged
            } else {
                solved += String.fromCharCode(ascii);
            }
        
        // Negative Shifts
        } else {
            if (ascii >= 65 && ascii <= 90) {
                if (ascii + num < 65) {
                    let extra = (65 - (ascii + num));
                    solved += String.fromCharCode(91-extra)
                } else {
                    solved += String.fromCharCode((ascii+num));
                }
            // Shift lowercase, maintaining case
            } else if (ascii >= 97 && ascii <= 122) {
                if (ascii + num < 97) {
                    let extra = (97 - (ascii + num));
                    solved += String.fromCharCode(123-extra)
                } else {
                solved += String.fromCharCode((ascii+num));
                } 
            // Add non-alphabetic characters unchanged
            } else {
                solved += String.fromCharCode(ascii);
            }
        }

        // a b c d e f g h i j k l m n o p q r s t u v w x y z

        

    }
    return solved;
};

// Do not edit below this line
module.exports = caesar;
