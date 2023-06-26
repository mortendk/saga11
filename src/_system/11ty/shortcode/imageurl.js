const path = require("path");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");

// Returns an url  for an image
module.exports = async function (image, width, format) {
  const src = "src" + image;
  const widths = width || ["750"];;
  const formats = format || ["jpeg"];

  // console.log(`🎈 imageurl generate: ${src}`);
  //does the image exist - we dont want to break the build.
  if (fs.existsSync(src)) {
    let options = {
      widths : widths,
      formats: formats,
      urlPath: "/img/",
      outputDir: "./_site/img/",
      // sensible filenames:
      // filenameFormat: function (src, width, format) {
      //   const extension = path.extname(src);
      //   const name = path.basename(src, extension);
      //   return `${name}-${width}w.${format}`;
      // },
    };
    // console.log(`🎈 imageurl next: ${options}`);
    // Generate the image
    Image(src, options);
    metadata = Image.statsSync(src, options);

    let filename;
    if (formats == "jpeg") {
      filename = metadata.jpeg[0].url;
    } else if (format == "png") {
      filename = metadata.png[0].url;
    } else if (format == "gif") {
      filename = metadata.gif[0].url;
    } else {
      filename = metadata.webp[0].url;
    }
    // console.log(`🎈 filename: ${filename}`);
    return filename;
  }
};
