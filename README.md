# What is this
Saga is a super small content managament system build for webdesigners who wants to
control their markup and not have to battle with database setup or complex techstacks

Its a try to get back to the late 90'ies and build flatfile sites that could be dropped
into any ftp server and be done with.

## Core Values
- No database setup
- 100% Markup control
- Small tech stack (ish...)
- Build for Web designers that knows html
- Easy to hand down to others
- Able to deploy on netlify/github pages or move to other host
- At the end its just html, css, js and a some images
- Easy to build the site with no interfearence from the system

## Tech stack
- markdown, json and nunjucks templates
- 11ty to generate the html files
- git for storage (github etc)
- Deploy on what you want (ftp / netlify / github pages)
- Netlifycms for online content editing
- Tailwind for css (easy to hand over to dev teams) - easy to remove
- Alpine for interactivity (also easy to remove)

## But i want a CMS
- Netlifycms can handle the generating of markdown and json files
- netlify hosting handles the user login stuff
- netlifycms can also run locally so no dependencies on netlify
- Its just markdown files so its easy to edit by hand by the webdesigner

---

## Quick start
1. open terminal do an `npm install`
2. spin up the site `npm run start`
3. build minified css 'npm run tailwind:build'

## Requirements:
- node
- eleventy https://www.11ty.dev
- tailwindcss
- Nunjucks https://mozilla.github.io/nunjucks/
- cms admin Netlifycms


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

## CMS (Netlify CMS)
first run
 npx netlify-cms-proxy-server
  npm run  admin

 then start the build
 npm run start

go to /admin

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

## Favicon

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

