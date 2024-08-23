const repeatString = function(word, number) {
    let repeatedString = '';

    if(number < 0){
        return "ERROR";
    }

    for(let i = 0; i < number; i++){
        repeatedString += word;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
