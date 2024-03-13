const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://www.dnd5eapi.co/api/ability-scores/";

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
};
