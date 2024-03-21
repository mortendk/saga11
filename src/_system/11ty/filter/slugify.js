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
  // Theres an issue with decapcms where false gets set to be "false" and the bolean option adds a default "true" as a value
  // so to let a use hide the page then ...
  // it-works(tm)
  if (str == "page-not-published"){
    return 'false';
  }

  return slugify(str, {
    lower: true,
    replacement: "-",
    remove: /[*+~.·,()'"`´%!?¿:@]/g,
  });


};
