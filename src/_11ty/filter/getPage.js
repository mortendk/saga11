module.exports = function (arr, url) {
  return arr.filter((item) => item.url == url);
};

// Get the data from another markdown file
// {% for item in collections.all |  getpage("/tags/" + tag + "/" ) %}
// Credits https://github.com/11ty/eleventy/discussions/1848
// Note: the url is define in the tag/.json
