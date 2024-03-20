const path = require("path");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");

module.exports = async function (file, widths, format, alttext, sizes, loading, css) {
  if (fs.existsSync(file)) {
    //test if the file exist
    src = file;
  } else if (file.indexOf("http://") === 0 || file.indexOf("https://") === 0) {
  // ok is it from a http somewhere
    src = file;
  } else if (fs.existsSync( './src' + file)) {
    // alright lets test and se if its in the global content/upload prefix with src
    src = './src' + file
  }else{
    // Throw an error
    console.log(`🚨 image.js: Missing file: ${file} `); 
  }

  const theCss = css || "";
  const theFormat = format || "webp";
  const theSizes = sizes || "(min-width: 30em) 50vw, 100vw";
  const theLoading = loading || "lazy";
  const theWidths = widths || ["640", "1024", "1563"];

  let metadata = await Image(src, {
    widths: theWidths,
    formats: theFormat ,
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
    filenameFormat: function (id, src, width, formats, options) {
      return `${id}-${width}w.${formats}`;
    },
  });

  let imageAttributes = {
    alt: alttext || "",
    sizes: theSizes,
    loading: theLoading,
    class: theCss,
    decoding: "async",
  };

  		return Image.generateHTML(metadata, imageAttributes);
  // return Image.generateHTML(metadata, imageAttributes, {
  //   whitespaceMode: "inline",
  // });
};
