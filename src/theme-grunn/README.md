# Grunn Theme

This is an Example theme build with tailwind & alpinejs

## scripts

package.json

```json
  "scripts": {
    "start": "npx netlify-cms-proxy-server & npm run watch",
    "cleanup": "rm -rf _site",
    "watch": "npx @11ty/eleventy --serve --quiet & npm run tw:watch",
    "tw:watch": "npx tailwindcss -c src/theme-grunn/tailwind.config.js -i src/theme-grunn/tailwind/tailwind.css -o src/theme-grunn/assets/css/style.css --watch",
    "tw:build": "npx tailwindcss -c src/theme-grunn/tailwind.config.js -i src/theme-grunn/tailwind/tailwind.css -o src/theme-grunn/assets/css/style.min.css --minify",
    "build": "npm run tw:build && npm run debug ",
    "debug": "ELEVENTY_ENV=prod DEBUG=* eleventy"
  },
```
