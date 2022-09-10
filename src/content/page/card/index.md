---
title: card
url: card
card:
  title: cards
  image: /upload/cyber.png
  alt: ""
  text: "The test page for different cards "
components:
  - type: pagecard
    template: components/pagecard/pagecard.njk
    page:
      - single
  - type: pagecard
    template: components/pagecard/pagecard.njk
    page:
      - /
eleventyNavigation:
  parent: main
  key: card
  title: card
  order: ""
layout: page/page.njk
eleventyExcludeFromCollections: false
---
