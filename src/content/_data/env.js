require("dotenv").config();

module.exports = {
  mode: process.env.ELEVENTY_ENV || "prod",
  url: process.env.SITE_URL || process.env.URL,
  netlifycmsport: process.env.PORT || "8082",
  branch: process.env.BRANCH || "main",
  root: process.env.ELEVENTY_ROOT,
  source: process.env.ELEVENTY_SOURCE,
  serverless: process.env.ELEVENTY_SERVERLESS || "",
};
