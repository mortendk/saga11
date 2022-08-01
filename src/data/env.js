require("dotenv").config();

module.exports = {
  url: process.env.SITE_URL || process.env.URL,
  mode: process.env.ELEVENTY_ENV || "prod",
  root: process.env.ELEVENTY_ROOT,
  source: process.env.ELEVENTY_SOURCE,
  serverless: process.env.ELEVENTY_SERVERLESS || "nope",
};
