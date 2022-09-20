Saga eleven - A Static Website builder powered by 11ty and netlifycms

Requirements: node + github + some knowledge of 11ty

## ⚠️Super duper alpa version 0.2

Fair warning this is still in alpha ;)

## Quick start

1. install saga

```
$ npm install
```

2. Spin it up:

```
$ npm  start
```

👉 To make the admin work clone the env.example to .env
(else the system dont know where the admin is)

🤖 go to the [admin interface admin](/admin)

💅 Themes are in /src/themes/
The are configured in /saga11.config.js

📜 content is in /src/content/

🎈 saga11 is build on top of [11ty](https://11ty.dev) & [NetlifyCMS](https://netlifycms.com)

🪲 bugs & comments [github](https://github.com/mortendk/saga11)

📲 PWA statupscreen

```
$ npm run splash-screens:build
```

🗑 Cleanup the build folder

```
$ npm run cleanup
```

## Static Sites FTW

Saga11 is a system to build static websites with a CMS that can be used for easier day to day operations

The taget audience is webdesigners that wants complete control over the markup, and that wants a true seperation of settings, content and output

Saga11 uses nunjucks as a template engine, clear template structure

Theres no fancy libraries or SPA or anything else. Its just a website HTML + CSS + JS
Delivering the content to the end user as fast and as good as possible

## Content types

The system ships with 2 content types

### Pages

A default page that can contain design componenets (gallerys,forms,text, features etc )

### Post

a clean simple standard post with a defult content field

## Themes

Themes are the heart and sould of the system ;)
This is where all the markup gets generated

The system ships with 2 themes:

### Grunn

An example theme build with tailwind and alpinejs for a "doo everything in the markup" approach

### Nakinn

a complete naked theme with no markup just {{ variables }}

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
