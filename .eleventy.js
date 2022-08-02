const path = require("path");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const Image = require("@11ty/eleventy-img");
const env = require("./src/data/env.js");
// -----------------------------------------------------------------
// Shortcuts
// -----------------------------------------------------------------
// TODO: the image shortcut is cumbersome but "works(tm)" aka need some <3
// {% image item.data.image, [100,300, 600],"(min-width: 30em) 50vw, 100vw",['webp'],"item.data.image,"css","lazy" %}
// {% image item.data.image, [100],"",['webp'] %}
async function image(
  img,
  width = [300, 600, 1200],
  sizes = "(min-width: 30em) 50vw, 100vw",
  format = ["webp", "jpeg"],
  alt = "image",
  css,
  loading = "lazy",
  urlpathprefix = "" //if we want fullpath urls
) {
  if (img == null) {
    // console.log("dude wheres my image ?");
  } else {
    src = "src/" + img;
    let metadata = await Image(src, {
      widths: width,
      formats: format,
      // widths: [300, 800, 1600],
      outputDir: "_site/img/", // seind image directly to the site build
      urlPath: urlpathprefix + "/img/",
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
  }
}

// {% imageBackgroundStyle "image", “size”, "gif”  %}
async function imagebackgroundstyle(img, width = "800", format = "webp") {
  src = "src/" + img;
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
async function imageurl(img, width = "1200", format = "webp") {
  if (img == null) {
    // console.log("dude wheres my image ?");
  } else {
    src = "src/" + img;
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
    return env.url + backgroundimg;
  }
}

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(embedYouTube, require("./src/_11ty/youtube.js"));

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", image);
  eleventyConfig.addNunjucksAsyncShortcode("imageBackgroundStyle", imagebackgroundstyle);
  eleventyConfig.addNunjucksAsyncShortcode("imageurl", imageurl);

  // PassThrough folders
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/service-workers.js");

  // Transform
  // Minify
  if (env.mode == "prod") {
    eleventyConfig.addTransform("htmlmin", require("./src/_11ty/minify.js"));
  }

  // -----------------------------------------------------------------
  // FILTERS
  // -----------------------------------------------------------------

  // {{ date | formatDate("cccc d. MMMM yyyy HH:mm", "DK") }}
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  //  https://github.com/moment/luxon/blob/master/docs/formatting.md
  eleventyConfig.addFilter("formatDate", require("./src/_11ty/filter/formatDate.js"));

  // markdwon {{ item.foo | markdown | safe }}
  eleventyConfig.addFilter("markdown", require("./src/_11ty/filter/markdown.js"));

  // Slugify - cleanup the path {{ title | slugify }}
  eleventyConfig.addFilter("slugify", require("./src/_11ty/filter/slugify.js"));

  // Get the data from another markdown file
  // {% for item in collections.all |  getpage("/tags/" + tag + "/" ) %}
  // Credits https://github.com/11ty/eleventy/discussions/1848
  // Note: the url is define in the tag/.json
  eleventyConfig.addFilter("getPage", (arr, url) => {
    return arr.filter((item) => item.url == url);
  });

  // Sort: order
  // {% for item in collections.FOO | sortByOrder %}
  eleventyConfig.addFilter("sortByOrder", (arr) => {
    arr.sort((a, b) => (a.data.order > b.data.order ? 1 : -1));
    return arr;
  });

  // Sort: title
  // {% for item in collections.FOO | sortByTitle %}
  eleventyConfig.addFilter("sortByTitle", (arr) => {
    arr.sort((a, b) => (a.data.title > b.data.title ? 1 : -1));
    return arr;
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
      (tag) => ["navigation", "menu", "relation", "frontpage"].indexOf(tag) === -1
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
      includes: "__includes",
      layouts: "___layouts",
      data: "data",
    },
  };
};
