// Generates a png file resized to a sqaure
const path = require("path");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");

const sharp = require("sharp");
const ico = require("sharp-ico");

module.exports = async function (file, size, name, format) {
  // coffect filepath
  if (fs.existsSync("src" + file)) {
    src = "src" + file;
  } else if (file.indexOf("http://") === 0 || file.indexOf("https://") === 0) {
    src = file;
  } else {
    console.log(`🚨 missing file: ${file} - src ${src}`);
  }

  if (format == "ico") {

    ico.sharpsToIco(
      [
        sharp(src)
      ],
      '_site/' + name,
      {
        sizes: [32],
        resizeOptions: {},
      }
    );

  } else {
    // Resize
    await sharp(src)
    .png()
    .resize(size, size)
    .toFile('_site/' + name  )
    .catch(function (err) {
      console.log('🚨 favicon not genererated ')
      console.log(err)
    })

  }
};
