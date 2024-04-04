// TODO add markdownItEleventyImg

let markdownItAttrs = require('markdown-it-attrs');
// markdwon {{ item.foo | markdown | safe }}
const markdownIt = require("markdown-it")({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}).use(markdownItAttrs, {}
);


module.exports = function markdown(value) {
  return markdownIt.render(value);
};
