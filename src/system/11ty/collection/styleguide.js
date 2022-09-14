module.exports = function (collection) {
  return collection.getFilteredByGlob("./src/themes/styleguide/**/*.njk");
};
