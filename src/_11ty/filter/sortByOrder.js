module.exports = function (value) {
  value.sort((a, b) => (a.data.order > b.data.order ? 1 : -1));
  return value;
};
