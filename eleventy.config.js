const path = require("path");
const fs = require("fs");

// Get settings
const settings = require("./saga11.config.js");
const env = require("./src/content/_data/env.js");
const theme = settings.theme || "theme-grunn";
const packageJson = require("./package.json");
const saga11version = packageJson.version;
const dateFormat = settings.dateFormat || "";
const timeZone = settings.timeZone || "";

// plugins
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(faviconsPlugin);

  // Shortcodes
  eleventyConfig.addShortcode("image", require("./src/_system/11ty/shortcode/image.js"));
  eleventyConfig.addShortcode("imageurl", require("./src/_system/11ty/shortcode/imageurl.js"));
  eleventyConfig.addShortcode("calendar", require("./src/_system/11ty/shortcode/calendarlinks.js"));
  eleventyConfig.addShortcode("datediff", require("./src/_system/11ty/shortcode/datediff.js"));

  // Filters
  eleventyConfig.addFilter("formatDate", require("./src/_system/11ty/filter/formatDate.js"));
  eleventyConfig.addFilter("markdown", require("./src/_system/11ty/filter/markdown.js"));
  eleventyConfig.addFilter("slugify", require("./src/_system/11ty/filter/slugify.js"));
  eleventyConfig.addFilter("sortByOrder", require("./src/_system/11ty/filter/sortByOrder.js"));
  eleventyConfig.addFilter("sortByTitle", require("./src/_system/11ty/filter/sortByTitle.js"));
  eleventyConfig.addFilter("sortByFilepath", require("./src/_system/11ty/filter/sortByFilepath.js"));
  eleventyConfig.addFilter("filtertags", require("./src/_system/11ty/filter/taglist.js"));
  eleventyConfig.addFilter("getPage", require("./src/_system/11ty/filter/getPage.js"));
  eleventyConfig.addFilter("netlifycmsedit", require("./src/_system/11ty/filter/netlifycmsediturl.js"));
  //RSS filters
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
  eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
  eleventyConfig.addLiquidFilter("getNewestCollectionItemDate", pluginRss.getNewestCollectionItemDate);
  eleventyConfig.addLiquidFilter("absoluteUrl", pluginRss.absoluteUrl);


  // eleventyConfig.addFilter("debug", require("./src/_system/11ty/filter/debug.js"));
  // eleventyConfig.addFilter("debugpretty", require("./src/_system/11ty/filter/debugPretty.js"));

  // Collections
  eleventyConfig.addCollection("allPosts", require("./src/_system/11ty/collection/allPosts.js"));
  eleventyConfig.addCollection("allPages", require("./src/_system/11ty/collection/allPages.js"));
  eleventyConfig.addCollection("allNotification", require("./src/_system/11ty/collection/allNotification.js"));
  eleventyConfig.addCollection("allTags", require("./src/_system/11ty/collection/allTags.js"));
  eleventyConfig.addCollection("tags", require("./src/_system/11ty/collection/tags.js"));
  eleventyConfig.addCollection("blocks", require("./src/_system/11ty/collection/blocks.js"));
  eleventyConfig.addCollection("styleguide", require("./src/_system/11ty/collection/styleguide.js"));

  // Transform
  if (env.mode == "prod") {
    eleventyConfig.addTransform("htmlmin", require("./src/_system/11ty/transform/minify.js"));
  }

  // Fix placement of files
  eleventyConfig.addPassthroughCopy({"src/theme-grunn/assets/" : "/assets/"});
  eleventyConfig.addPassthroughCopy({"src/theme-grunn/service-workers.js" : "service-workers.js"});

  // eleventyConfig.addPassthroughCopy("src/themes/debug/");

  // global vars todo: is this existing for liquid ?
  // eleventyConfig.addNunjucksGlobal("saga11version", saga11version);
  // eleventyConfig.addNunjucksGlobal("theme", theme);
  // Date and time fun
  // eleventyConfig.addNunjucksGlobal("timeZone", timeZone);
  // eleventyConfig.addNunjucksGlobal("dateFormat", dateFormat);

  // Local Server
  eleventyConfig.setServerOptions({
    port: env.siteport,
  });

  // Ignore README
  eleventyConfig.ignores.add("README.md");

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  return {
    dir: {
      input: "src/",
      output: "_site",
      includes: theme + "/includes",
      layouts: theme + "/layouts",
      data: "content/_data",
    },
  };
};
