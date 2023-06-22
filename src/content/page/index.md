---
title: Saga11
card:
  title: "This is the frontpage card "
  image: /content/upload/spaceship.png
  alt: spaceship
  text: The frontpage card that we use for sharing
components:
  - type: collection
    title: ""
    template: components/collection/collection.liquid
    collection: saga11
image: https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80
tags:
  - test
url: /
layout: page/frontpage.liquid
date: 2023-06-20 22:01:46
eleventyExcludeFromCollections: false
eleventyNavigation:
  parent: ""
  title: Home
  order: 10
  key: main
  excerpt: Mega text
---
{% render "image.liquid" file:"/content/upload/4hundo.gif", alt:"test", widths:"500" %}

😍 it works{tm}

👉 To make the admin work clone the env.example to .env

🤖 go to the [admin interface admin](/admin)

💅 Themes are in /src/themes/

📜 content is in /src/content/

🎈 saga11 is build on top of [11ty](https://11ty.dev) & [NetlifyCMS](https://netlifycms.com)

🪲 bugs & comments [github](https://github.com/mortendk/saga11)