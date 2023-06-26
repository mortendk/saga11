const markdownIt = require("markdown-it");
const markdownItRenderer = new markdownIt();

module.exports = function markdown(value) {
  return markdownItRenderer.renderInline(value);
};
