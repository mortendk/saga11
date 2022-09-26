# Theme Grunn

This is an Example theme build with tailwind & alpinejs

## scripts

package.json

```json
  "scripts": {
    "start": "npx netlify-cms-proxy-server & npm run watch",
    "cleanup": "rm -rf _site",
    "watch": "npx @11ty/eleventy --serve --quiet & npm run tw:watch",
    "tw:watch": "npx tailwindcss -c src/themes/grunn/tailwind.config.js -i src/themes/grunn/tailwind/tailwind.css -o src/themes/grunn/assets/css/style.css --watch",
    "tw:build": "npx tailwindcss -c src/themes/grunn/tailwind.config.js -i src/themes/grunn/tailwind/tailwind.css -o src/themes/grunn/assets/css/style.min.css --minify",
    "build": "npm run tw:build && npm run debug ",
    "debug": "ELEVENTY_ENV=prod DEBUG=* eleventy",
    "splash-screens:build": "npm run splash-screens:screen & npm run splash-screens:screendark",
    "splash-screens:screen": "npx pwa-asset-generator http://localhost:3791/pwa-splashscreen/ src/themes/grunn/assets/splash_screens --path-override '/assets/splash_screens' -i src/themes/grunn/assets/splash_screens/index.html --splash-only ",
    "splash-screens:screendark": "npx pwa-asset-generator http://localhost:3791/pwa-splashscreen-dark/ src/themes/grunn/assets/splash_screens  --path-override '/assets/splash_screens' -i src/themes/grunn/assets/splash_screens/index.html --splash-only --dark-mode"
  },
```
