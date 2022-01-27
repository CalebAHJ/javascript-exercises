const palindromes = function (str) {
    str = str.toLowerCase();
    const charArray = str.split("");
    const letterArray = charArray.filter(char => (/[a-z]/).test(char));

    let i1 = 0;
    let i2 = letterArray.length - 1;
    while (i1 < i2) {
        if (letterArray[i1] !== letterArray[i2]) return false;
        i1++;
        i2--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
