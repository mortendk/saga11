const { DateTime } = require("luxon");

module.exports = function (date_start, date_end) {
  let start = DateTime.fromJSDate(date_start);
  let end = DateTime.fromJSDate(date_end);

  let diffInHours = end.diff(start, "hours");
  let hours = diffInHours.toObject();

  return `${hours.hours}`;
};
