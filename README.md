Saga eleven - A Static Website builder powered by 11ty and netlifycms

# HTML + MarkDown = 💜

## ⚠️ This is Beta software

Fair warning this is still in beta - but your
probably a geek so you know this ;)

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

Saga11 is a system to build static websites with a CMS

The taget audience is webdesigners that wants complete control over the markup, and that wants a true seperation of settings, content and output

Theres no fancy libraries or SPA or anything else. Its just a website HTML + CSS + a tiny bit of JS

## Figma Resources

Overview of all components
https://www.figma.com/file/3lgQNUa3Y5TvV2V0XaQKoL/Saga-11?node-id=4266%3A924

## Kill localhost:[portnumber]

```sudo lsof -i :3791```

```kill -9 <PID>```

```sudo lsof -i :8081```
