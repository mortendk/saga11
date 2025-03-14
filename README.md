Saga eleven - A Static Website builder powered by 11ty and netlifycms

# HTML + MarkDown = 💜

## ⚠️ This is Beta software

Fair warning this is still in beta - but your
probably a geek so you know this ;)

## Quick start

1. Enviroment setup

```
$ npm  run local-setup
```

open the /.env for port settings and gitbranch

2. Install Saga11

```
$ npm install
```

3. Spin it up:

```
$ npm  start
```

🤖 go to the [admin interface admin](/admin)

💅 Theme : /src/theme-grunn/
can be renamed in package.json

📜 content is in /src/content/

🎈 saga11 is build on top of [11ty](https://11ty.dev) & [decap cms](https://decapcms.org/)

🪲 bugs & comments [github](https://github.com/mortendk/saga11)

🗑 Cleanup the build folder

```
$ npm run cleanup
```

## Admin access online

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
