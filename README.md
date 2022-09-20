Saga eleven - A Static Website builder powered by 11ty and netlifycms, but at the end its just html, css & js

## Super duper beta version 0.2.1

Fair warning this is still in Beta, so things might gonna break



## a static what...

Saga11 is a system to build static websites.

Its created cause of the need for a light cms where the webdesigner can completely control what goes on and content is just content, and templates are in complete control of the output

The core value is that at the end its just HTML & CSS and we should not ship more to the end user.

we want to make the fastes websites thats possible and perfectly markup/css/js everytime.

So theres no fancy libraries or spa or anything else its just a website - delivering the content as it should be (if you want to)

## Content types

- Pages a component driven page
- Post basic blog post organized with tags

## Themes

The system ships with 2 themes:

### Grunn

An example theme with all the web fun we can add

### Nakinn

a complete naked theme with no markup no nothing just the {{ variables }} that the system spits out

## Core Values

- Its just HTML & CSS (and a tiny bit of js)
- Build for WebDesigners.
- No Database - everything lives in the repo
- 100% Markup control
- Host on whatever you want
- Lighhouse 4 hundred is a goal
- Everything is a template
- Content is content - you want settings add a new template and use it there
- 100/100/100/100 is a goal everytime

## Tech stack

- 11ty generating the html
- Markdown, json and nunjucks.
- Github for storage
- Netlifycms for online editing
- Tailwind for css
- alpinjs for sprinling js fun

---

## Quick start

1. install saga

```
$ npm install
```

2. Spin it up:

```
$ npm  start
```

open: http://localhost:3791

3. build the production site

```
npm build
```

## Notes

### local envirotment

set up an .env file for production copy the env.example to .env

### Change theme

open saga11.config.js and change the theme

modify the scripts for your need in package.json

### Build startscreens for PWA

```
$ npm run splash-screens:build
```

### Cleanup the build folder

```
$ npm run cleanup
```
