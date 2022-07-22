/**
 * Format a date with Luxon
 *
 * @param {String} date - string Date
 * @param {String} format - date format (Luxon)
 * @param {String} locale - locale
 * @returns {String} formatted date
 */
// https://github.com/moment/luxon/blob/master/docs/formatting.md
const { DateTime } = require("luxon");

module.exports = function (date, format, locale = "en") {
  date = new Date(date);
  return DateTime.fromJSDate(date).setLocale(locale).toFormat(format);
};
