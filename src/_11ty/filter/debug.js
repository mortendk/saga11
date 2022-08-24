// TODO: prettier  output with https://www.npmjs.com/package/json-tree-view ?
const inspect = require("util").inspect;

module.exports = function (content) {
  return `${inspect(content)}`;
};
