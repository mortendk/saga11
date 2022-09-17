# What is this

Saga11 is a system to build static websites.

its build on 11ty and uses netflifycms as a backend (if the webdesigner wants this)

The system ships with 2 themes:
Grunn an example theme with all the bells and whitsles

Nakinn a complete naked theme with no markup no nothing just the {{ variables }} that the system spits out

Its a website builder made for webdesigners that goes for 100/100/100/100

## Core Values

- No Database - Flatfile based
- 100% Markup control
- Build for Web Designers
- Able to deploy on netlify/github pages or move to other host for simple sftp deployment
- Easy to build the site with no interfearence from a system
- At the end "its just html, css, js" :)

## Tech stack

- 11ty generating the html.
- Markdown, json and nunjucks.
- Github for storage
- Netlifycms for online editing
- Tailwind for css
- Vanilla js

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

http://localhost:8080

3. build the production site

```
npm run build
```
