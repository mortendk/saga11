An upgrade guide

Heres a short guide to upgrade saga11

## 1 Delete:

/_site/
/node_modules/
/package-lock.json

(Both will be regenered when you `npm install` and `npm start`)

## Overwrite
/src/system
/src/themes/debug
/src/themes/grunn
/src/themes/nakinn

## Config
eleventy.config.js
netlify.toml
package.json
saga11.config.js
