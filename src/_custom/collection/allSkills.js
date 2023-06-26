module.exports = function (collection) {
  return collection.getFilteredByGlob("./src/content/skill/**/*.md");
};
