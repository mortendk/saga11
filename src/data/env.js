require("dotenv").config();

module.exports = {
  url: process.env.URL || "http://localhost:8080",
  mode: process.env.ELEVENTY_ENV || "prod",
};
