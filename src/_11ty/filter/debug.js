// TODO: prettier  output with https://www.npmjs.com/package/json-tree-view ?
const inspect = require("util").inspect;

module.exports = function (content) {
  return `🎈<pre style="background-color: orange; padding:1rem">${inspect(content)}</pre>`;
};
