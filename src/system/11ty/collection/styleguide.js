module.exports = function (collection) {
  return collection.getFilteredByGlob("./src/system/styleguide/**/*.njk");
};
