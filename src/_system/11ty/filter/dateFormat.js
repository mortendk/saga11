module.exports = function (date, locale, style ) {
  return new Intl.DateTimeFormat(locale, { dateStyle: style }).format(date);
};

