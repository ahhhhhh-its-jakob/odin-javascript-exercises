const fibonacci = function(limit) {
    if(limit < 0){
        return 'OOPS'
    }

    if(limit == 0){
        return 0;
    }

    if(limit == 1){
        return 1;
    }

    return fibonacci(limit - 1) + fibonacci(limit - 2);
};

// Do not edit below this line
module.exports = fibonacci;
