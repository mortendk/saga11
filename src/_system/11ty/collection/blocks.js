// looks at all data and for where we have a blockposition
module.exports = function (collection) {
  return collection.getAll().filter((item) => item.data.blockposition);
};
