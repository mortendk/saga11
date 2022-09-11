module.exports = function (collection) {
  return collection.getFilteredByGlob("./src/_system/styleguide/**/*.njk");
};
