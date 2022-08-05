const env = require("../data/env");

module.exports = {
  add: ["soundcloud"],
  use: ["youtube", "vimeo", "twitter"],
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
  soundcloud: {
    options: {
      show_user: false,
      visual: false,
      show_comments: false,
      show_playcount: false,
      small: true,
      color: "#ff00ff",
      sharing: false,
    },
  },
};
