---
alt: alt text
photocredit: taken by foobar
order: 1
opengraph:
  title: "This is open graph "
  description: "This is OG description "
  image: ""
layout: page/frontpage.liquid
date: 2023-06-20 22:01:46
title: Saga 11
url: /
image: /content/upload/helloworld.png
components:
  - type: text
    template: components/text/text.liquid
    text: |-
      text component

      **bold** text

      ## title {.text-red-500}

      ```html
      <h2> code
      ```
  - type: collection
    order: data.order
    size: 3
    template: components/collection/collection.liquid
    collection: frontpage
    title: Collection
    text: |-
      text component in collection
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

inline class
## title {.text-red-500}

```html
<h2> code
```


{% mastodon "https://mastodon.social/deck/@mortendk/112297516536989168" %}
{% youtube "https://youtu.be/wgLvQlqc-Xw?si=g2LUXU5eP5Bq4ESL" %}
{% vimeo "https://vimeo.com/928505095" %}
