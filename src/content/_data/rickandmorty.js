const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = "https://rickandmortyapi.com/api/character/";

  let ricknmorty = await EleventyFetch(url, {
    duration: "1d",
    type: "json",
  });

  // console.log(ricknmorty.results);
  return ricknmorty.results;
};