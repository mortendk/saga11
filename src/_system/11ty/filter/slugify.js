/**
 * Slugify a string
 *
 * @param {String} str - string
 * @returns {String} formatted string
 *
 *  {{ title | slugify }}
 *
 */

const slugify = require("slugify");

module.exports = function (str) {
  if (str == "page-not-published"){
    return 'false';
  }

  return slugify(str, {
    lower: true,
    replacement: "-",
    remove: /[*+~.·,()'"`´%!?¿:@]/g,
  });


};
