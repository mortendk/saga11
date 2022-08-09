const { google, outlook, office365, yahoo, ics } = require("calendar-link");

module.exports = function (
  linktype = "google",
  date,
  date_end,
  allday = false,
  title,
  description
) {
  const event = {
    title: title,
    description: description,
    start: date,
    end: date_end,
    allDay: allday,
    url: "https://sage11.dev/foobar",
  };

  switch (linktype) {
    case "google":
      return google(event);
      break;
    case "outlook":
      return outlook(event);
      break;
    case "office365":
      return office365(event);
      break;
    case "yahoo":
      return yahoo(event);
      break;
    case "ics":
      return ics(event);
      break;

    default:
      console.log(`No type  ${linktype} in calendarlinks. `);
  }
};
