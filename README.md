## Quick start
1. open terminal do an `npm install`
2. spin up the site `npm run dev`
3. build minified css 'npm run tailwind:build'

## Requirements:
- node
- eleventy https://www.11ty.dev
- tailwindcss
- Nunjucks https://mozilla.github.io/nunjucks/
-

## installation
(Install node)

```
npm install -g @11ty/eleventy
```

```
npm install
```

### npm run dev
```
npm run dev
```
### npm run build (build css minified)

```
npx tailwindcss -i src/css/tailwind.css -o src/css/style.min.css --minify
```

## Visual regression test
Install Backstop for visual regression test on local setup
```npm install -g backstopjs```

configure in `backstop.json`


### Workflow:
First make sure a local version is running as production `netlify dev`


#### First run
``` $ netlify dev```
Build the reference images
`backstop reference`

then we can test - do the changes and then we cant test up against the reference images
`backstop test`

If its cool and approved we can add the changes to the references with approve
`backstop approve`

`backstop openReport`


## Setup
inside _data/site.son general meta data is added like sitename etc

## RSS feed
rss feed meta is setup on metadata.json

## Favicon
is inside favicon
use the xxxx service to generate it all


## css setup
Tailwin config /tailwin.config.js setup all the specific here
https://tailwindcss.com/

## js alphine
alphine is downloaded local and uses 3+
https://alpinejs.dev/

### markdown template

```
---
title: my title
layout: base.njk
eleventyExcludeFromCollections: false

permalink: "mega-awesome-stuff/"
tags: post
date: Last Modified


eleventyNavigation:
  key: contact
  parent: about
  order: 1

---
```

## Template
https://mozilla.github.io/nunjucks/templating.html
