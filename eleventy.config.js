const path = require("path");
const fs = require("fs");
const util = require('util');

const { EleventyRenderPlugin } = require("@11ty/eleventy");

const env = require("./src/content/_data/env.js");
const package = require("./package.json");

const saga11version = package.version;
const theme = package.config.theme;
const dateLocalize = package.config.dateLocalize || "";
const timeZone = package.config.timeZone || "";

// plugins
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");

const pluginTOC = require("@uncenter/eleventy-plugin-toc");

const markdownIt = require('markdown-it');
const markdownItEleventyImg = require("markdown-it-eleventy-img");
const markdownItAnchor = require('markdown-it-anchor');
const embedYouTube = require("eleventy-plugin-youtube-embed");
const embedVimeo = require("eleventy-plugin-vimeo-embed");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(faviconsPlugin, {'generateManifest': false});
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3", "h4"],
    ignoredHeadings: ["[data-toc-exclude]"],
    ignoredElements: [], // the elements (within the headings) to ignore when generating the TOC (list of selectors)
    ul: true, // whether to a use ul or ol
    wrapper: function (toc) {
        // the wrapper to use around the generated TOC
        return `${toc}`;
    },
});

  // Shortcodes
  eleventyConfig.addShortcode("image", require("./src/_system/11ty/shortcode/image.js"));
  eleventyConfig.addShortcode("imageurl", require("./src/_system/11ty/shortcode/imageurl.js"));
  eleventyConfig.addShortcode("calendar", require("./src/_system/11ty/shortcode/calendarlinks.js"));
  eleventyConfig.addShortcode("datediff", require("./src/_system/11ty/shortcode/datediff.js"));

  // Filters
  eleventyConfig.addFilter("markdown", require("./src/_system/11ty/filter/markdown.js"));
  eleventyConfig.addFilter("slugify", require("./src/_system/11ty/filter/slugify.js"));
  eleventyConfig.addFilter("getPage", require("./src/_system/11ty/filter/getPage.js"));
  eleventyConfig.addFilter("netlifycmsedit", require("./src/_system/11ty/filter/netlifycmsediturl.js"));
  eleventyConfig.addFilter("weekday", require("./src/_system/11ty/filter/dateWeekday.js"));
  eleventyConfig.addFilter("month", require("./src/_system/11ty/filter/dateMonth.js"));
  eleventyConfig.addFilter("dateformat", require("./src/_system/11ty/filter/dateFormat.js"));

  //RSS filters
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
  eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
  eleventyConfig.addLiquidFilter("getNewestCollectionItemDate", pluginRss.getNewestCollectionItemDate);
  eleventyConfig.addLiquidFilter("absoluteUrl", pluginRss.absoluteUrl);

  // Dump & Debug
  eleventyConfig.addFilter('dump', function(value) {
    const str = util.inspect(value);
    return `<pre style="white-space: pre-wrap; background: #eee; color: #666; padding: 1rem; border: 1px dashed #ccc">${unescape(str)}</pre>`
  });

  eleventyConfig.addFilter("debug", require("./src/_system/11ty/filter/debug.js"));

  // Collections
  eleventyConfig.addCollection("tags", require("./src/_system/11ty/collection/tags.js"));
  eleventyConfig.addCollection("styleguide", require("./src/_system/11ty/collection/styleguide.js"));

  // Fix placement of files
  eleventyConfig.addPassthroughCopy({ ["src/" + theme + "/assets/"] : "/assets/"});
  eleventyConfig.addPassthroughCopy({ ["src/" + theme + "/service-workers.js"] : "service-workers.js"});
  eleventyConfig.addPassthroughCopy({"src/content/upload/" : "/content/upload/"});

  // Global varibles
  eleventyConfig.addGlobalData("saga11version", saga11version);
  eleventyConfig.addGlobalData("theme", theme);
  eleventyConfig.addGlobalData("timezone", timeZone);
  eleventyConfig.addGlobalData("dateLocalize", dateLocalize);

  // Local Server
  eleventyConfig.setServerOptions({
    port: env.siteport,
  });

  // Liquid options
  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
    dynamicPartials: true,
    strict_filters: true,
  });

  // Markdown IT
  eleventyConfig.setLibrary('md', markdownIt ({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }).use(
    markdownItEleventyImg, {
    imgOptions: {
      widths: [640, 1200, 1500],
      urlPath: "/img",
      outputDir: "./_site/img/",
      formats: ["webp"]
    },
    globalAttributes: {
      class: "md-image",
      decoding: "async",
      loading: "lazy",
      sizes: "(min-width: 30em) 50vw, 100vw"
    },
    resolvePath: (filepath) => path.join('src', filepath)
  }
  ).use(markdownItAnchor, {})

  );

  // embed youtube
  eleventyConfig.addPlugin(embedYouTube, {
    embedClass: 'md-video',
    lite: true,
    modestBranding: true
  });

  // embed vimeo
  eleventyConfig.addPlugin(embedVimeo, {
    embedClass: 'md-video',
    dnt: true
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
