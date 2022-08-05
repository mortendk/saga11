const env = require("../data/env");

module.exports = {
  add: ["soundcloud"],
  // use: ["twitter"],
  twitter: {
    options: {
      cacheText: true,
      embedClass: "twitter",
      doNotTrack: true,
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
  youtube: {
    options: {
      lite: true,
    },
  },
  twitch: {
    options: {
      parent: env.url,
    },
  },
};
