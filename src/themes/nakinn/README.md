# Nakinn

The Cleanest theme ever created!

The nakinn theme will be build when the grunn theme is done and the content definition is done as well :)

## activate theme

change the themename in /saga11.config.js to nakinn

```js
module.exports = {
  // Theme settings: nakinn theme is for pure minimalist
  theme: "grunn",
};
```

## Remove markup from a theme

regex ftw

```
<(?![!])[^<>]+>
```

## vscode search (note to selv)

<(?![!])[^<>]+>
./src/themes/nakinn/
\*.svg, html.njk, share.njk, address.njk, calendar.njk, opengraph.njk, splashscreens.njk, responsive.njk, socialmedia.njk

## Scripts for package.json

```json
  "scripts": {
  "start": "npx netlify-cms-proxy-server & npm run watch",
  "cleanup": "rm -rf _site",
  "watch": "npx @11ty/eleventy --serve --quiet",
  "build": "npm run debug",
  "debug": "ELEVENTY_ENV=prod DEBUG=* eleventy",
  "splash-screens:build": "npm run splash-screens:screen & npm run splash-screens:screendark",
  "splash-screens:screen": "npx pwa-asset-generator http://localhost:3791/pwa-splashscreen/ src/themes/grunn/assets/splash_screens --path-override '/assets/splash_screens' -i src/themes/grunn/assets/splash_screens/index.html --splash-only ",
  "splash-screens:screendark": "npx pwa-asset-generator http://localhost:3791/pwa-splashscreen-dark/ src/themes/grunn/assets/splash_screens  --path-override '/assets/splash_screens' -i src/themes/grunn/assets/splash_screens/index.html --splash-only --dark-mode"
},

```
