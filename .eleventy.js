const path = require("path");
const fs = require("fs");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Image = require("@11ty/eleventy-img");

const { DateTime } = require("luxon");
const slugify = require("slugify");

// Image shortcode
async function imageShortcode(src, alt, sizes, css) {
  let metadata = await Image(src, {
    widths: [300, 600,1600],
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
  eleventyConfig.addNunjucksAsyncShortcode("imageResize", imageShortcode);

  // passThrough
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/files");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // -----------------------------------------------------------------
  // FILTERS
  // -----------------------------------------------------------------

  //DATE Filters
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('dateFormat', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('d LLLL yyyy hh:mm - cccc');
  });

  eleventyConfig.addFilter('monthDayYear', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('d LLLL yyyy');
  });

  // SLUG
  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@]/g
    });
  });

  // Get page filter
  //  Now we can grap all the data from another markdown file
  // {% for item in collections.all |  getpage("/authors/" + author + "/" ) %}
  // Credits https://github.com/11ty/eleventy/discussions/1848
  eleventyConfig.addFilter("getPage", (arr, url) => {
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

  // Creates custom collection "post"
  eleventyConfig.addCollection("allPosts", function(collection) {
     return collection.getFilteredByGlob("./src/content/post/*.md");
  });

  // Creates custom collection "page"
  eleventyConfig.addCollection("allPages", function(collection) {
    return collection.getFilteredByGlob("./src/content/page/*.md");
 });

  // Recent post
  eleventyConfig.addCollection("recentPosts", function(collection) {
    return collection.getAllSorted().reverse().slice(0, 5);
  });

  // post order by title
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

  // TAGS
  //  grapped from https://github.com/11ty/eleventy-base-blog
  function filterTagList(tags) {
    return (tags || []).filter(tag => ["nav", "relation"].indexOf(tag) === -1);

  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });


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
