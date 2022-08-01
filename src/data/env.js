require("dotenv").config();

module.exports = {
  url: process.env.URL || "http://localhost:8080",
  mode: process.env.ELEVENTY_ENV || "prod",
  root: process.env.ELEVENTY_ROOT,
  source: process.env.ELEVENTY_SOURCE,
  serverless: process.env.ELEVENTY_SERVERLESS || "nope",
};
