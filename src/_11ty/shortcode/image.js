const path = require("path");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");

/* snippet
{% image
  img=image,
  width=[400,800, 1600],
  sizes="(min-width: 1600px) 50vw, 100vw",
  css="shadow rounded-xl",
  loading = "eager"
%}
*/

module.exports = function (image) {
  const src = "src" + image.img;
  const widths = image.width || [100, 200, 400];
  const formats = image.format || ["webp", "jpeg"];
  const sizes = image.sizes || "(min-width: 1200px) 50vw, 100vw";
  const css = image.css || "";
  const alt = image.alt || "";
  const loading = image.loading || "lazy"; //lazy vs eager

  // console.log(`🎈 Generating image:  ${src}`);
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
    // Attributes for the images
    let imageAttributes = {
      alt,
      class: css,
      sizes,
      loading,
      decoding: "async",
    };
    metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
  } else {
    return "";
    // console.log(`😈  image ${src} dont exist`);
  }
};
