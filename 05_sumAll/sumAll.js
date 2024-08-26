const sumAll = function(val1, val2) {
    let min = 0, max = 0, total = 0;

    if(val1 < 0 || val2 < 0 || !Number.isInteger(val1) || !Number.isInteger(val2) ){
        return 'ERROR';
    }

    if(val1 >= val2){
        min = val2;
        max = val1;
    } else {
        min = val1;
        max = val2;
    }

    while(max >= min){
        total += max;
        max--;
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;
