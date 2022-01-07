# What is this
Saga is a  small cms build for webdesigners who wants to control the markup & not have to hassle with databases

Its a try to get back to the late 90'ies and build flatfile sites that could be dropped into any ftp server ... oooh the glory days!

## Core Values
- No DB markdown ftw
- 100% Markup control
- Small tech stack (ish...)
- Build for Web Designers
- Easy to hand down to
- Able to deploy on netlify/github pages or move to other host for simple sftp deployment
- Easy to build the site with no interfearence from a system
- At the end "its just html, css, js" :)

## Tech stack
- 11ty generating the html.
- Markdown, json and nunjucks.
- Github for storage
- Deploy on what you want (ftp / netlify / github pages).
- Netlifycms for online editing
- Tailwind for css
- Alpine js for interactivity ?

## But I want a CMS for a client
saga uses netlifycms out the box for easy administration of the markdown files

---

## Quick start
0. get 11ty
```
npm install -g @11ty/eleventy
```

1. install saga
```
npm install
```
2. spin up the site
```
npm run start
```

3. build minified css
```
npm run tailwind:build
```

## Requirements:
- node
- eleventy https://11ty.dev
- tailwindcss  https://tailwindcss.com/
- Nunjucks https://mozilla.github.io/nunjucks/

CMS interface for markdown files
- Netlifycms https://www.netlifycms.org/


## CMS -Netlify CMS
To make the cms editing to work locally
first run the cmsproxy
```
npx netlify-cms-proxy-server
```

then start the build
```
npm run start
```

http://localhost:8080/admin

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



## RSS feed

## Favicon

## css setup
Tailwin config /tailwin.config.js setup all the specific here
https://tailwindcss.com/

## js alphine
alphine is downloaded local and uses 3+
https://alpinejs.dev/

### content template

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

## Template engine
https://mozilla.github.io/nunjucks/templating.html


## Structure
###  /_site
The is where 11ty compiles the website.
for sweet n easy sftp
the content is autogenerated

### /src
This is where all the files to generate _site is places - this is where we all the work.
- /_data/  Site Config
- /_templates/  - All the awesome magic lives here
- /admin/ netlifycms lives here

### Assets
- /assets/
- /assets/css/
- /assets/fonts/
- /assets/img/favicon/
- /assets/img/opengraph/
- /assets/js/

### Content
- /content/ Add all content markdown here

### Images

### Systempages
/systempages/ -

- /images/ uploaded images from cms

## CSS
add inline of use tailwind.css and @apply

## Config
---
- .editorconfig : 2 spaces!
- .eleventy.js : Config of eleventy
- .gitignore :
- backstop.json : setup visual regression
- .netlify.toml : setup for netlify
- .package.json
- .tailwind.config.js



## TODO
- implement 11ty menu or a simple "add links by hand or dropdown like a related item
-

## Netlifycms Setup
1 Push code to github
2 Crete site on netlify - get site from github
3 Enable identity https://app.netlify.com/sites/[SITE]/identity
4 add external providers (ex google)
https://app.netlify.com/sites/[SITE]/settings/identity#external-providers
5 Add Git Gateway
https://app.netlify.com/sites/[SITE]/settings/identity#git-gateway

## Posttemplates
Heres the different templates that a post can select in netlifycms
the templates get add automatically id they are put into _templates/post/{template}.njk

configured in admin/config.yml
post posttemplates

To name the template inside of netlifycms use the system specific saga-lay
---
saga-template-name: Post with contact form
---



