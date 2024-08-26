const removeFromArray = function(array) {

    for(let i = 1; i < arguments.length; i++){

        for(let index = array.length - 1; index >= 0; index--){

            if(array[index] === arguments[i]){ 
                array.splice(index, 1);
            } else {
                continue;
            }
            
        }
    }
    
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
