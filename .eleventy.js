const path = require("path");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Image = require("@11ty/eleventy-img");

const { DateTime } = require("luxon");
const slugify = require("slugify");


async function imageShortcode(src, alt, sizes, css) {
  let metadata = await Image(src, {
    widths: [300, 600],
    // formats: ["avif", "jpeg"],
    outputDir: "_site/img/", // we push this image directly to the siter build
    urlPath: "/img/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    }
  });

  let imageAttributes = {
    class: css,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}


module.exports = function (eleventyConfig) {
  //plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // shortcode
  eleventyConfig.addNunjucksAsyncShortcode("imageresize", imageShortcode);

  // passThrough
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/files");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Browser config
  eleventyConfig.setBrowserSyncConfig({
    // Open browser by default
    open: true,
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('_site/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  // -----------------------------------------------------------------
  // FILTERS
  // -----------------------------------------------------------------

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('dateFormat', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('d LLLL yyyy hh:mm - cccc');
  });

  eleventyConfig.addFilter('hour', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('HH:mm');
  });

  eleventyConfig.addFilter('monthDay', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('LLLL d');
  });

  // SLUG
  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@]/g
    });
  });

  // Get page
  // {% for item in collections.all |  getpage("/authors/" + author + "/" ) %}
  eleventyConfig.addFilter("getpage", (arr, url) => {
    return arr.filter(item => item.url == url);
  });

  // -----------------------------------------------------------------
  // COLLECTIONS
  // https://www.11ty.dev/docs/collections/
  // -----------------------------------------------------------------
  // SORT: order
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

  // -----------------------------------------------------------------
  // Collection example

  // Creates custom collection "post"
  eleventyConfig.addCollection("allPost", function(collection) {
     return collection.getFilteredByGlob("./src/content/post/*.md");
  });

  // Recent post
  eleventyConfig.addCollection("recentPosts", function(collection) {
    return collection.getAllSorted().reverse().slice(0, 5);
  });

  // post by title
  eleventyConfig.addCollection("postByTitle", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/content/post/*.md")
      .sort(function (a, b) {
        let nameA = a.data.title.toUpperCase();
        let nameB = b.data.title.toUpperCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      });
  });




  // -----------------------------------------------------------------
  // Directory setup
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src/",
      output: "_site",
      includes: "_templates",
      data: "_data",
    },
  };

};
