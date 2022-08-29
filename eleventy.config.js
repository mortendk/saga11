const path = require("path");
const fs = require("fs");
const env = require("./src/data/env.js");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Shortcodes
  eleventyConfig.addShortcode("image", require("./src/_11ty/shortcode/image"));
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

  // Collections
  eleventyConfig.addCollection("allPosts", require("./src/_11ty/collection/allPosts.js"));
  eleventyConfig.addCollection("allPages", require("./src/_11ty/collection/allPages.js"));
  eleventyConfig.addCollection("styleguide", require("./src/_11ty/collection/styleguide.js"));
  eleventyConfig.addCollection("tags", require("./src/_11ty/collection/tags"));

  // Transform
  if (env.mode == "prod") {
    eleventyConfig.addTransform("htmlmin", require("./src/_11ty/transform/minify.js"));
  }

  // PassThrough
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/upload");
  eleventyConfig.addPassthroughCopy("src/service-workers.js");

  // global vars
  eleventyConfig.addNunjucksGlobal("saga11version", "alpha 4");

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
