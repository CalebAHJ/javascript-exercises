const repeatString = function(str, num) {
    if (num < 0) return "ERROR";

    let repeatS = "";
    for (let i = 0; i < num; i++) {
        repeatS = repeatS + str;
    }
    return repeatS;
};

// Do not edit below this line
module.exports = repeatString;
