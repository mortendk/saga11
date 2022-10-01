module.exports = function (tags) {
  return (tags || []).filter((tag) => ["relation"].indexOf(tag) === -1);
};
