const path = require("path");
const fs = require("fs");
const env = require("./src/data/env.js");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const Image = require("@11ty/eleventy-img");

async function picture(image) {
  const src = "src" + image.img;
  const widths = image.width || [100, 200, 400];
  const formats = image.format || ["webp", "jpeg"];
  const sizes = image.sizes || "(min-width: 1200px) 50vw, 100vw";
  const css = image.css || "";
  const alt = image.alt || "";
  const loading = image.loading || "lazy"; //lazy vs eager

  if (fs.existsSync(src)) {
    // console.log(`✅  img exist: ${image.img}`);
    let metadata = await Image(src, {
      widths: widths,
      formats: formats,
      outputDir: "_site/img/", // seind image directly to the site build
      urlPath: "/img/",
      // cacheOptions: {
      //   duration: "1d",
      //   directory: ".cache",
      //   removeUrlQueryParams: false,
      // },
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      },
    });

    let imageAttributes = {
      class: css,
      alt: alt,
      sizes: sizes,
      loading: loading,
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes, {
      whitespaceMode: "inline",
    });
  } else {
    console.log(`🎈  picture function: ${image} dont exist - this function is called from: `);
    return `<!-- image function called but: ${image} -->`;
  }
}

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("picture", picture);
  eleventyConfig.addShortcode("imageurl", require("./src/_11ty/shortcode/imageurl"));
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
  eleventyConfig.addFilter("netlifycmsedit", require("./src/_11ty/filter/netlifycmsediturl"));

  eleventyConfig.addFilter("debug", require("./src/_11ty/filter/debug"));
  eleventyConfig.addFilter("debugpretty", require("./src/_11ty/filter/debugPretty"));

  // Collections
  eleventyConfig.addCollection("allPosts", require("./src/_11ty/collection/allPosts.js"));
  eleventyConfig.addCollection("allPages", require("./src/_11ty/collection/allPages.js"));
  eleventyConfig.addCollection(
    "allNotification",
    require("./src/_11ty/collection/allNotification.js")
  );
  eleventyConfig.addCollection("tags", require("./src/_11ty/collection/tags"));
  eleventyConfig.addCollection("styleguide", require("./src/_11ty/collection/styleguide.js"));

  // Transform
  if (env.mode == "prod") {
    eleventyConfig.addTransform("htmlmin", require("./src/_11ty/transform/minify.js"));
  }

  // PassThrough
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/upload");
  eleventyConfig.addPassthroughCopy("src/service-workers.js");

  // global vars
  eleventyConfig.addNunjucksGlobal("saga11version", "alpha 5");

  // Local Server
  eleventyConfig.setServerOptions({
    port: 8080,
  });

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
