const palindromes = function (string) {
    let newString = string.replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase(); //uses regular expression to get rid of any punctuation therefore ignoring it during the comparison
    let reversedString = newString.split('').reverse().join('');

    if(newString === reversedString){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
