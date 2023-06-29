const path = require("path");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");

module.exports = async function (file, width, format) {
  if (fs.existsSync("src" + file)) {
    src = "src" + file;
  } else if (file.indexOf("http://") === 0 || file.indexOf("https://") === 0) {
    src = file;
  } else {
    console.log(`🚨 missing file: ${file} - src ${src}`);
  }

  const theFormat = format || "webp";
  const theWidth = width || ["1024"];

  let options = await Image(src, {
    widths: theWidth,
    formats: theFormat ,
    urlPath: "/img/",
    outputDir: "_site/img/",
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    },
    filenameFormat: function (id, src,theWidth, formats) {
      return `${id}-${theWidth}w.${formats}`;
    },
  });

  // console.log("🦐 Object: %o", options)
  let filename;
  if (theFormat == "jpeg") {
    filename = options.jpeg[0].url;
  } else if (format == "png") {
    filename = options.png[0].url;
  } else if (format == "gif") {
    filename = options.gif[0].url;
  } else {
    filename = options.webp[0].url;
  }

  return filename;
};
