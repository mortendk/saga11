Saga eleven - A Static Website builder powered by 11ty and netlifycms

## 14.june 23 : The next version (beta 0.8) will shift to liquid instead of nunjucks 
I got frustrated with the lack of includes and images - so when 0.8 gets out here over the summer its gonna be in liquid 
follow along in the liquid branch


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

🎈 saga11 is build on top of [11ty](https://11ty.dev) & [decap cms](https://decapcms.org/)

🪲 bugs & comments [github](https://github.com/mortendk/saga11)

🗑 Cleanup the build folder

```
$ npm run cleanup
```

## Admin interface

https://docs.netlify.com/visitor-access/identity/

## Static Sites FTW

Saga11 is a system to build static websites

The taget audience is webdesigners that wants complete control over the markup, and that wants a true seperation of settings, content and output

Theres no fancy libraries or SPA or anything else. Its just a website HTML + CSS + a tiny bit of JS

## Figma Resources

Overview of all components
https://www.figma.com/file/3lgQNUa3Y5TvV2V0XaQKoL/Saga-11?node-id=4266%3A924

## Kill portnumber

if the portnumbers are in use all kinds of errors comes out :/
8081 / 3791
`sudo lsof -i :3791`

`kill -9 <PID>`

`sudo lsof -i :8081`

.
