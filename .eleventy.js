const path = require("path");
const fs = require("fs");

const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");
const slugify = require("slugify");
const Image = require("@11ty/eleventy-img");

// Image shortcode
async function pictureShortcode(
  img,
  width = [300, 600, 1200],
  sizes = "(min-width: 30em) 50vw, 100vw",
  alt = "image",
  css,
  loading = "lazy"
) {
  src = "src/" + img;
  let metadata = await Image(src, {
    widths: width,
    // formats: ["avif", "jpeg"],
    // widths: [300, 800, 1600],
    outputDir: "_site/img/", // we push this image directly to the site build
    urlPath: "/img/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
  });

  let imageAttributes = {
    class: css,
    alt,
    sizes,
    loading,
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

// img shortcode takes width as a variable
async function imageShortcode(img, width = "400", alt = "image", css) {
  src = "src/" + img;
  let metadata = await Image(src, {
    widths: [width],
    formats: ["jpeg", "png"],
    outputDir: "_site/img/", // we push this image directly to the site build
    urlPath: "/img/",
  });
  // item.data.image
  let data = metadata.jpeg[metadata.jpeg.length - 1];
  return `<img src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" class="${css}" loading="lazy" decoding="async">`;
}

module.exports = function (eleventyConfig) {
  //plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  // shortcode
  eleventyConfig.addNunjucksAsyncShortcode("createImage", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("createPicture", pictureShortcode);

  // passThrough - copy directly to site
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/_admin");
  eleventyConfig.addPassthroughCopy("src/service-workers.js");

  const md = new markdownIt({
    html: true,
  });

  // -----------------------------------------------------------------
  // FILTERS
  // -----------------------------------------------------------------

  // markdwon {{ item.foo | markdown | safe }}
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  // Sort: order
  // {% for item in collections.tag | sortByOrder %}
  eleventyConfig.addFilter("sortByOrder", (arr) => {
    arr.sort((a, b) => (a.data.order > b.data.order ? 1 : -1));
    return arr;
  });

  // Sort: title
  // {% for item in collections.tag | sortByTitle %}
  eleventyConfig.addFilter("sortByTitle", (arr) => {
    arr.sort((a, b) => (a.data.title > b.data.title ? 1 : -1));
    return arr;
  });

  // Date Filters
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("dateFormat", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "d LLLL yyyy hh:mm - cccc"
    );
  });

  eleventyConfig.addFilter("monthDayYear", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "d LLLL yyyy"
    );
  });

  // Slug filter
  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@]/g,
    });
  });

  //filter for nice urls
  eleventyConfig.addFilter("yearmonth", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "yyyy-LLLL-d"
    );
  });

  // Get page filter
  // Get the data from another markdown file
  // {% for item in collections.all |  getpage("/tags/" + tag + "/" ) %}
  // Credits https://github.com/11ty/eleventy/discussions/1848
  // Note to self: the url is define in the relations-foo/.json
  eleventyConfig.addFilter("getPage", (arr, url) => {
    return arr.filter((item) => item.url == url);
  });

  // -----------------------------------------------------------------
  // COLLECTIONS
  // https://www.11ty.dev/docs/collections/
  // -----------------------------------------------------------------
  // {% for item in collections.COLLECTION %}

  // Creates custom collection "post"
  eleventyConfig.addCollection("allPosts", function (collection) {
    return collection.getFilteredByGlob("./src/content/post/**/*.md");
  });

  // Creates custom collection "page"
  eleventyConfig.addCollection("allPages", function (collection) {
    return collection.getFilteredByGlob("./src/content/page/**/*.md");
  });

  // TAGS
  // Grapped from https://github.com/11ty/eleventy-base-blog
  function filterTagList(tags) {
    // Filtes that are used by the system that we dont want in our collections
    return (tags || []).filter(
      (tag) =>
        ["navigation", "menu", "relation", "frontpage"].indexOf(tag) === -1
    );
  }

  eleventyConfig.addFilter("filterTagList", filterTagList);

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Browser config - set 404 page
  eleventyConfig.setBrowserSyncConfig({
    // Open browser by default
    open: true,
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("_site/404.html");
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  // -----------------------------------------------------------------
  // Directory setup
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src/",
      output: "_site",
      includes: "_templates",
      data: "_data",
    },
  };
};
