/**
 * Slugify a string
 *
 * @param {String} str - string
 * @returns {String} formatted string
 *
 * https://github.com/moment/luxon/blob/master/docs/formatting.md
 * {{ date | formatDate("cccc d. MMMM yyyy HH:mm", "DK") }}
 */

const slugify = require("slugify");

module.exports = function (str) {
  return slugify(str, {
    lower: true,
    replacement: "-",
    remove: /[*+~.·,()'"`´%!?¿:@]/g,
  });
};
