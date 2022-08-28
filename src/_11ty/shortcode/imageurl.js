//<div class="bg-cover h-16" style="background-image:url({% imageurl img="/upload/cyber.png", width=[800] %})"></div>
const path = require("path");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");

// Returns an url  for an image
module.exports = function (image) {
  const src = "src" + image.img;
  const widths = image.width || [1200];
  const formats = image.format || ["jpeg"];

  // console.log(`🎈 imageurl generate: ${src}`);
  //does the image exist - we dont want to break the build.
  if (fs.existsSync(src)) {
    let options = {
      widths,
      formats,
      urlPath: "/img/",
      outputDir: "./_site/img/",
      // sensible filenames:
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      },
    };

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
