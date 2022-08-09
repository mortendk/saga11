const env = require("../data/env");

module.exports = {
  use: ["vimeo", "twitter"],
  youtube: {
    options: {
      lite: true,
    },
  },
  vimeo: {
    dnt: true,
    embedClass: "",
  },
  twitter: {
    options: {
      cacheText: true,
      doNotTrack: true,
      embedClass: "twitter",
      twitterScript: {
        enabled: false,
      },
    },
  },
};
