const htmlmin = require("html-minifier");

module.exports = function htmlMinTransform(value, outputPath) {
  if (outputPath.indexOf(".html") > -1) {
    let minified = htmlmin.minify(value, {
      removeComments: false,
      collapseWhitespace: true,
    });
    return minified;
  }
  return value;
};
