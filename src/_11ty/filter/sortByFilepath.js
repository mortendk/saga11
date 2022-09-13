module.exports = function (value) {
  value.sort((a, b) => (a.filePathStem > b.filePathStem ? 1 : -1));
  return value;
};
