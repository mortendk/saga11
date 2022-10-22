# Nakinn

The Cleanest theme ever created!

The nakinn theme will be build when the grunn theme is done and the content definition is done as well :)

<[a-zA-Z\/][^>]\*>

## Scripts for package.json

```json
  "scripts": {
    "start": "npx netlify-cms-proxy-server & npm run watch",
    "cleanup": "rm -rf _site",
    "build": "npm run tw:build && npm run debug ",
    "debug": "ELEVENTY_ENV=prod DEBUG=* eleventy",
    "splash-screens:build": "npm run splash-screens:screen & npm run splash-screens:screendark",
    "splash-screens:screen": "npx pwa-asset-generator http://localhost:3791/pwa-splashscreen/ src/themes/grunn/assets/splash_screens --path-override '/assets/splash_screens' -i src/themes/grunn/assets/splash_screens/index.html --splash-only ",
    "splash-screens:screendark": "npx pwa-asset-generator http://localhost:3791/pwa-splashscreen-dark/ src/themes/grunn/assets/splash_screens  --path-override '/assets/splash_screens' -i src/themes/grunn/assets/splash_screens/index.html --splash-only --dark-mode"
  },
```
