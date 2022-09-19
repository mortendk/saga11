Saga eleven - A Static Website builder powered by 11ty and netlifycms, but at the end its just html, css & js

## Super duper alpa version 0.2

Fair warning this is still in alpha ;)

## a static what...

Saga11 is a system to build static websites.

Its created cause of the need for a light cms where the webdesigner can completely control what goes on and content is just content, and templates are in complete control of the output

The core value is that at the end its just HTML & CSS and we should not ship more to the end user.

we want to make the fastes websites thats possible and perfectly markup/css/js everytime.

So theres no fancy libraries or spa or anything else its just a website - delivering the content as it should be (if you want to)

## Content types

- Pages with componenet
- Post for blog post etc

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

0. get 11ty

```
$ npm install -g @11ty/eleventy
```

1. install saga

```
$ npm install
```

2. spin Saga11 to build the site

```
$ npm  start
```

http://localhost:8080

3. build the production site

```
npm run build
```
