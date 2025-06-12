const convertToCelsius = function(f) {
  const unrounded = (f - 32) * 5 / 9;
  return Math.round(unrounded * 10) / 10;
};

const convertToFahrenheit = function(f) {
  const unrounded = f * 9 / 5 + 32;
  return Math.round(unrounded * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
