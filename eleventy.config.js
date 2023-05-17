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
const Image = require("@11ty/eleventy-img");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");

async function picture(image) {
  // netlifycms have a tendency to create an empty image in the markdown image: "" so test for this and kill it
  if (image.img == "" || !image.img) {
    return "";
  }

  const widths = image.width || [640, 1024, 1563];
  const formats = image.format || ["webp", "jpeg"];
  const sizes = image.sizes || "(max-width: 640px) 50vw, 100vw";
  const css = image.css || "";
  const alt = image.alt || "";
  const loading = image.loading || "lazy"; //lazy or eager
  let src;

  if (fs.existsSync("src" + image.img)) {
    src = "src" + image.img;
  } else if (image.img.indexOf("http://") === 0 || image.img.indexOf("https://") === 0) {
    src = image.img;
  } else {
    console.log(` nope src: ${image.img} - ${src}`);
  }

  if (src) {
    let metadata = await Image(src, {
      widths: widths,
      formats: formats,
      outputDir: "_site/img/", // send image directly to the site build
      sharpOptions: {
        animated: true,
      },
      urlPath: "/img/",
      cacheOptions: {
        duration: "1d",
        directory: ".cache",
        removeUrlQueryParams: false,
      },
      filenameFormat: function (id, src, width, format, options) {
        return `${id}-${width}w.${format}`;
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
    // console.log(`🎈 picture function: ${image} dont exist `);
    // return `<!-- image function called but: ${image} -->`;
    return "";
  }
}

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(faviconsPlugin);

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("picture", picture);
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
  eleventyConfig.addFilter("debug", require("./src/_system/11ty/filter/debug.js"));
  eleventyConfig.addFilter("debugpretty", require("./src/_system/11ty/filter/debugPretty.js"));

  // Collections
  eleventyConfig.addCollection("allPosts", require("./src/_system/11ty/collection/allPosts.js"));
  eleventyConfig.addCollection("allPages", require("./src/_system/11ty/collection/allPages.js"));
  eleventyConfig.addCollection("allNotification", require("./src/_system/11ty/collection/allNotification.js"));
  eleventyConfig.addCollection("allTags", require("./src/_system/11ty/collection/allTags.js"));
  eleventyConfig.addCollection("styleguide", require("./src/_system/11ty/collection/styleguide.js"));
  eleventyConfig.addCollection("tags", require("./src/_system/11ty/collection/tags.js"));
  eleventyConfig.addCollection("blocks", require("./src/_system/11ty/collection/blocks.js"));

  // Transform
  if (env.mode == "prod") {
    eleventyConfig.addTransform("htmlmin", require("./src/_system/11ty/transform/minify.js"));
  }

  // PassThrough todo: can this be pushed to /_site/ instead of themes
  // eleventyConfig.addPassthroughCopy("src/" + theme + "/assets/");
  eleventyConfig.addPassthroughCopy({"src/theme-grunn/assets/" : "/assets/"});
  eleventyConfig.addPassthroughCopy({"src/theme-grunn/service-workers.js" : "service-workers.js"});
  // eleventyConfig.addPassthroughCopy({ "src/img": "subfolder/img" });

  // eleventyConfig.addPassthroughCopy("src/themes/debug/");

  // global vars todo: is this existing for liquid ?
  eleventyConfig.addNunjucksGlobal("saga11version", saga11version);
  // eleventyConfig.addNunjucksGlobal("theme", theme);
  // Date and time fun
  eleventyConfig.addNunjucksGlobal("timeZone", timeZone);
  eleventyConfig.addNunjucksGlobal("dateFormat", dateFormat);

  // Local Server
  eleventyConfig.setServerOptions({
    port: env.siteport,
  });

  // Ignore README
  eleventyConfig.ignores.add("README.md");

  // the amazing theme selector
  // eleventyConfig.ignores.add("src/themes/");
  // eleventyConfig.ignores.delete("src/themes/" + theme);

  // Directory setup
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src/",
      output: "_site",
      includes: theme + "/includes",
      layouts: theme + "/layouts",
      data: "content/_data",
    },
  };
};
