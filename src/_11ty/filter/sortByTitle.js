module.exports = function (value) {
  value.sort((a, b) => (a.data.title > b.data.title ? 1 : -1));
  return value;
};
