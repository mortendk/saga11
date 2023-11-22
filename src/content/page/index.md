---
title: Saga 11
url: /
image: https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
components:
  - type: collection
    order: data.order
    size: 3
    template: components/collection/collection.liquid
    collection: saga11
card:
  title: "This is the frontpage card "
  image: ""
  alt: spaceship
  text: The frontpage card that we use for sharing
tags:
  - saga11
order: 1
eleventyExcludeFromCollections: false
eleventyNavigation:
  title: Home
  order: 0
  key: main
opengraph:
  image: /content/upload/4hundo.gif
  title: "This is open graph "
  description: "This is OG description "
layout: page/frontpage.liquid
date: 2023-06-20 22:01:46
seo:
  index: index
  follow: nofollow
  title: This is the Seo title
  description: This is the desription used for meta tags yo
---
😍 it works {tm}

👉 To make the admin work clone the env.example to .env

🤖 go to the [admin interface admin](/admin)

💅 Themes are in /src/themes/

📜 content is in /src/content/

🎈 saga11 is build on top of [11ty](https://11ty.dev) & [NetlifyCMS](https://netlifycms.com)

🪲 bugs & comments [github](https://github.com/mortendk/saga11)
