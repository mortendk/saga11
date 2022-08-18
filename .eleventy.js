const path = require("path");
const fs = require("fs");
const env = require("./src/data/env.js");
const EleventyFetch = require("@11ty/eleventy-fetch");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Image = require("@11ty/eleventy-img");

// -----------------------------------------------------------------
// Shortcuts
// -----------------------------------------------------------------
// {% image img, [100,300, 600],"(min-width: 30em) 50vw, 100vw",['webp'],"item.data.image,"css","lazy/eager" %}
async function image(img, width, sizes, format, alt, css, loading, urlpathprefix) {
  // Test if there actually is an image string
  if (img) {
    src = img;
    let metadata = await Image(src, {
      widths: width,
      formats: format,
      outputDir: "_site/img/",
      urlPath: urlpathprefix + "/img/",
      cacheOptions: {
        duration: "1d",
        directory: ".cache",
        removeUrlQueryParams: false,
      },
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      },
    });

    let imageAttributes = {
      class: css,
      alt: alt,
      sizes,
      loading,
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes, {
      whitespaceMode: "inline",
    });
  } else {
    console.log(
      `image function called but ${img} dont exist - this function is called from:  `
    );
    return `!<!-- image do not exist: ${img} -->`;
  }
}

// {% imageBackgroundStyle "image", “size”, "gif”  %}
// TODO: test if the image exists
async function imagebackgroundstyle(img, width = "800", format = "webp") {
  src = img;
  let metadata = await Image(src, {
    widths: [width],
    formats: [format],
    // widths: [300, 800, 1600],
    outputDir: "_site/img/", // we push this image directly to the site build
    urlPath: "/img/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  });

  let backgroundimg;
  if (format == "jpeg") {
    backgroundimg = metadata.jpeg[0].url;
  } else if (format == "png") {
    backgroundimg = metadata.png[0].url;
  } else if (format == "gif") {
    backgroundimg = metadata.gif[0].url;
  } else {
    backgroundimg = metadata.webp[0].url;
  }
  return `style="background-image: url(${backgroundimg})"`;
}

// {% imageurl "image", “size”, "gif”  %}
// TODO: test if the image exists
async function imageurl(img, width = "1200", format = "webp") {
  //   if (img == null) {
  //     // console.log("dude wheres my image ?");
  //   } else {
  //     src = img;
  //     let metadata = await Image(src, {
  //       widths: [width],
  //       formats: [format],
  //       // widths: [300, 800, 1600],
  //       outputDir: "_site/img/", // we push this image directly to the site build
  //       urlPath: "/img/",
  //       filenameFormat: function (id, src, width, format, options) {
  //         const extension = path.extname(src);
  //         const name = path.basename(src, extension);
  //         return `${name}-${width}w.${format}`;
  //       },
  //     });
  //
  //     let backgroundimg;
  //     if (format == "jpeg") {
  //       backgroundimg = metadata.jpeg[0].url;
  //     } else if (format == "png") {
  //       backgroundimg = metadata.png[0].url;
  //     } else if (format == "gif") {
  //       backgroundimg = metadata.gif[0].url;
  //     } else {
  //       backgroundimg = metadata.webp[0].url;
  //     }
  //     return env.url + backgroundimg;
  //   }
}

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", image);
  eleventyConfig.addNunjucksAsyncShortcode("imageBackgroundStyle", imagebackgroundstyle);
  eleventyConfig.addNunjucksAsyncShortcode("imageurl", imageurl);
  eleventyConfig.addShortcode("calendar", require("./src/_11ty/shortcode/calendarlinks.js"));
  eleventyConfig.addShortcode("datediff", require("./src/_11ty/shortcode/datediff.js"));

  // Filters
  eleventyConfig.addFilter("formatDate", require("./src/_11ty/filter/formatDate.js"));
  eleventyConfig.addFilter("markdown", require("./src/_11ty/filter/markdown.js"));
  eleventyConfig.addFilter("slugify", require("./src/_11ty/filter/slugify.js"));
  eleventyConfig.addFilter("sortByOrder", require("./src/_11ty/filter/sortByOrder.js"));
  eleventyConfig.addFilter("sortByTitle", require("./src/_11ty/filter/sortByTitle.js"));
  eleventyConfig.addFilter("filtertags", require("./src/_11ty/filter/taglist.js"));
  eleventyConfig.addFilter("getPage", require("./src/_11ty/filter/getPage"));

  // COLLECTIONS
  eleventyConfig.addCollection("allPosts", require("./src/_11ty/collection/allPosts.js"));
  eleventyConfig.addCollection("allPages", require("./src/_11ty/collection/allPages.js"));
  eleventyConfig.addCollection("tags", require("./src/_11ty/collection/tags"));

  // Transform
  // Minify
  if (env.mode == "prod") {
    eleventyConfig.addTransform("htmlmin", require("./src/_11ty/minify.js"));
  }

  // PassThrough
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/service-workers.js");

  eleventyConfig.addNunjucksGlobal("saga11version", "beta 1 ");

  // Directory setup
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src/",
      output: "_site",
      includes: "__includes",
      layouts: "___layouts",
      data: "data",
    },
  };
};
