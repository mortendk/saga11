module.exports = function (date, locale, style ) {
  return new Intl.DateTimeFormat(locale, { weekday: style }).format(date);
};

