const ftoc = function(tempf) {
  const tempc = (tempf - 32) * 5 / 9;
  return +tempc.toFixed(1);
};

const ctof = function(tempc) {
  const tempf = tempc * 9 / 5 + 32;
  return +tempf.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
