const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = "https://billetto.dk/api/v3/public/events?&organizer_id=125612";

  let billetto = await EleventyFetch(url, {
    duration: "1d",
    type: "json",
    fetchOptions: {
      headers: {
        "Api-Keypair": process.env.BILLETTO,
        accept: "application/json",
      },
    },
  });

  // console.log(billetto.data);
  return billetto.data;
};
