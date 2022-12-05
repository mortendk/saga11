
/**
 * Format a date with Luxon
 *
 * @param {String} date - string Date
 * @param {String} format - date format (Luxon)
 * @param {String} locale - locale
 * @returns {String} formatted date
 */
// https://github.com/moment/luxon/blob/master/docs/formatting.md
// languages https://www.w3schools.com/jsref/jsref_tolocalestring.asp
//  {{ date | formatDate("cccc d. MMMM yyyy HH:mm", dateFormat, timeZone) }}
const { DateTime } = require("luxon");

// TODO: why cant we grap the data formats as default from saga11.config ?
module.exports = function (date, format, dateLocale = "en", timeZone= "America/New_york") {
  date = new Date(date);
  return DateTime.fromJSDate(date).setZone(timeZone).setLocale(dateLocale).toFormat(format);
};
