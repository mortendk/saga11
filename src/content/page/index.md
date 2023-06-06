---
title: Saga11
image: /content/upload/spaceship.png
card:
  title: "This is the frontpage card "
  image: "/content/upload/spaceship.png"
  alt: spaceship
  text: The frontpage card that we use for sharing
components:
  - type: collection
    title: Collection
    template: components/collection/collection.liquid
    collection: saga11
tags:
  - test
url: /
eleventyNavigation:
  parent: ""
  title: Home
  order: 10
  key: main
  excerpt: Mega text
layout: page/frontpage.liquid
eleventyExcludeFromCollections: false
---

😍 it works{tm}

👉 To make the admin work clone the env.example to .env

🤖 go to the [admin interface admin](/admin)

💅 Themes are in /src/themes/

📜 content is in /src/content/

🎈 saga11 is build on top of [11ty](https://11ty.dev) & [NetlifyCMS](https://netlifycms.com)

🪲 bugs & comments [github](https://github.com/mortendk/saga11)
