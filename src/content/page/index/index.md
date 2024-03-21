---
order: 1
opengraph:
  title: "This is open graph "
  description: "This is OG description "
  image: ""
layout: page/frontpage.liquid
date: 2023-06-20 22:01:46
title: Saga 11
url: /
image:
  - uglysweather.png
components:
  - type: collection
    order: data.order
    size: 3
    template: components/collection/collection.liquid
    collection: saga11
    title: Collection
    text: |+
      **bold** text 

      ## title {.text-red-500}

      ```html
      <h2> code
      ```


card:
  title: "This is the frontpage card "
  image: ""
  alt: spaceship
  text: The frontpage card that we use for sharing
tags:
  - saga11
eleventyExcludeFromCollections: false
eleventyNavigation:
  title: main
  order: 0
  key: main
seo:
  index: index
  follow: nofollow
  title: This is the Seo title
  description: This is the desription used for meta tags yo
---
😍 it works {tm}

👉 To make the *admin* work clone the env.example to .env

🤖 go to the [admin interface admin](/admin)

💅 Themes are in /src/themes/

📜 content is in /src/content/

🎈 saga11 is build on top of [11ty](https://11ty.dev) & [NetlifyCMS](https://netlifycms.com)

🪲 bugs & comments [github](https://github.com/mortendk/saga11)

## title {.text-red-500} 
```html
<h2> code
```

![](uglysweather.png)
