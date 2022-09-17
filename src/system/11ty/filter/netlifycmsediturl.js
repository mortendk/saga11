/**
 * Return the path to netlifycms for
 *
 * @param {String} path - the filePathStem to the markdown file
 *
 * @returns {String} Path to netlifycms
 */

module.exports = function (path) {
  contentpath = path.replace("/content/", "");
  folder = contentpath.split("/");
  // test whats the collection is
  if (folder[3]) {
    url = `/admin/#/collections/${folder[0]}/entries/${folder[1]}/${folder[2]}/${folder[3]}`;
  } else if (folder[2]) {
    url = `/admin/#/collections/${folder[0]}/entries/${folder[1]}/${folder[2]}`;
  } else if (folder[1]) {
    url = `/admin/#/collections/${folder[0]}/entries/${folder[1]}`;
  }
  return url;
};
