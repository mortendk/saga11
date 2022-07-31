require("dotenv").config();

module.exports = {
  enviroment: process.env.ELEVENTY_ENV || "dev",
  url: process.env.URL || "localhost:8080",
  theme: process.env.THEME || "nakinn",
};
