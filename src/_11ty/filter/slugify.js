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
  return slugify(str, {
    lower: true,
    replacement: "-",
    remove: /[*+~.·,()'"`´%!?¿:@]/g,
  });
};
