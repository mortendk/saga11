module.exports = function (tags) {
  return (tags || []).filter((tag) => ["menu", "relation", "frontpage"].indexOf(tag) === -1);
};
