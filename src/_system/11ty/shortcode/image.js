const path = require("path");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");

module.exports = async function (file, alt, sizes, width, format, loading, css) {

  if (fs.existsSync("src" + file)) {
    src = "src" + file;
  } else if (file.indexOf("http://") === 0 || file.indexOf("https://") === 0) {
    src = file;
  } else {
    console.log(` nope src: ${file} - ${src}`);
  }

  const csss = css || "";
  let metadata = await Image(src, {
    widths: width,
    formats: format,
    urlPath: "/img/",
    outputDir: "_site/img/",
    sharpOptions: {
      animated: true,
    },
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    },
    filenameFormat: function (id, src, width, format, options) {
      return `${id}-${width}w.${format}`;
    },
  });

  let imageAttributes = {
    alt,
    sizes,
    loading,
    class: csss,
    decoding: "async",
  };

  // You bet we throw an error on a missing alt (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
};
