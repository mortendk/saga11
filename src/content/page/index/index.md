---
title: Saga 11
url: /
image: /content/upload/helloworld.png
alt: alt text
photocredit: photosrecite
components:
  - type: text
    template: components/text/text.liquid
    text: text component
  - type: collection
    order: data.order
    size: 3
    template: components/collection/collection.liquid
    collection: frontpage
    title: Collection
    text: |-
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
tags: []
order: 1
eleventyExcludeFromCollections: false
eleventyNavigation:
  title: main
  order: 0
  key: main
opengraph:
  title: "This is open graph "
  description: "This is OG description "
  image: ""
layout: page/frontpage.liquid
date: 2023-06-20 22:01:46
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
