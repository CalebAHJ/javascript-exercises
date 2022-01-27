const fibonacci = function(ordinal) {
    if (typeof ordinal === String) ordinal = +ordinal;
    if (ordinal < 1) return "OOPS";
    if (ordinal === 1) return 1;

    let fnum1 = 0;
    let fnum2 = 1; 
    for (let i = 1; i < ordinal; i++) {
        fnum2 = fnum1 + fnum2;
        fnum1 = fnum2 - fnum1;
    }
    return fnum2;
};

// Do not edit below this line
module.exports = fibonacci;
