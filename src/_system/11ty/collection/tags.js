// The filter hides the tag from collections
function filterTags(tags) {
  return (tags || []).filter((tag) => ["rssfeed", "relation"].indexOf(tag) === -1);
}

module.exports = function (collection) {
  let tagSet = new Set();

  collection.getAll().forEach((item) => {
    (item.data.tags || []).forEach((tag) => tagSet.add(tag));
  });

  return filterTags([...tagSet]);
};
