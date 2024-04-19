require("dotenv").config();

module.exports = {
  mode: process.env.ELEVENTY_ENV || "prod",
  url: process.env.SITE_URL || "http://localhost:3791",
  siteport: process.env.SITE_PORT || "3791",
  branch: process.env.BRANCH || "main",
  root: process.env.ELEVENTY_ROOT,
  source: process.env.ELEVENTY_SOURCE,
  serverless: process.env.ELEVENTY_SERVERLESS || "",

  decapcmsport: process.env.PORT || "8082",
  decapcmsworkflow: process.env.DECAP_WORKFLOW || "simple",

  decapcmsmedialibrary: process.env.DECAP_MEDIALIBRARY,
  uploadcarekey: process.env.UPLOADCARE_KEY,
  cloudinaryname: process.env.CLOUDINARY_NAME,
  cloudinarykey: process.env.CLOUDINARY_KEY,
};
