const removeFromArray = function(array, ...nums) {
    const checkAmount = nums.length;
    for (let i = 0; i < checkAmount; i++) {
        const check = array.indexOf(nums.at(i));
        if (check !== -1) array.splice(check, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
