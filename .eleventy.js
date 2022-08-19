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
// {% set img = page.inputPath | replace("index.md", image) %}
// {% set css = "shadow rounded-lg" %}
// {% set format = [webp] %}
// {% set srcset = [400,800, 1600] %}
// {% set sizes = "(min-width: 1600px) 50vw, 100vw" %}
// {% set loading = "eager" %}
// {% image img, srcset, sizes, format, alt,css, loading %}

async function image(
  img,
  width = "[400,800, 1200]",
  sizes = "(min-width: 1200px) 50vw, 100vw",
  format = ["webp"],
  alt = "",
  css,
  loading = "lazy",
  urlpathprefix = "" //if we want fullpath urls
) {
  if (fs.existsSync(img)) {
    src = img;
    let metadata = await Image(src, {
      widths: width,
      formats: format,
      outputDir: "_site/img/", // seind image directly to the site build
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
    // console.log(`image function called but: ${img} dont exist`);
    return `<!-- image function called but: ${img} -->`;
  }
}

//
// {% imageBackgroundStyle "image", “size”, "gif”  %}
// <div class="bg-cover " {% imagebackgroundstyle page.inputPath | replace("index.md", image) %} ></div>
async function imagebackgroundstyle(img, width = "800", format = "webp") {
  if (fs.existsSync(img)) {
    src = img;
    let metadata = await Image(src, {
      widths: [width],
      formats: [format],
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
  } else {
    // return `<!-- image function on ${fileCall}  cant find the image: ${img} -->`;
  }
}

// used for opengraph
// {% imageurl page.inputPath | replace("index.md", image),
async function imageurl(img, width = "1200", format = "webp") {
  if (fs.existsSync(img)) {
    src = img;
    let metadata = await Image(src, {
      widths: [width],
      formats: [format],
      outputDir: "_site/img/",
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
    return env.url + backgroundimg;
  } else {
    // let fileCall = this.page.inputPath;
    // return `<!-- image function on ${fileCall}  cant find the image: ${img} -->`;
  }
}

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", image);
  eleventyConfig.addNunjucksAsyncShortcode("imagebackgroundstyle", imagebackgroundstyle);
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
