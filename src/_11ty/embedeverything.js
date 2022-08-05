const env = require("../data/env");

module.exports = {
  add: ["soundcloud"],
  use: ["youtube", "vimeo"],
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
      dnt: true,
      embedClass: "twitter",
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
  twitch: {
    options: {
      parent: env.url,
    },
  },
};
