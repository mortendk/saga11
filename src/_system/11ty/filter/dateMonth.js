// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
module.exports = function (date, locale, style ) {
  return new Intl.DateTimeFormat(locale, { month: style }).format(date);
};
