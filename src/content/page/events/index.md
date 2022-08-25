---
title: A page
url: pagetest
sections:
  - type: collection
    title: Test list
    collection: test
    text: teaser text
  - type: images
    title: Image Gallery
    images:
      - image: /upload/cyber.png
      - image: /upload/image1.png
      - image: /upload/dungeonmaster.png
  - type: images
    title: "no images here "
    images:
      - image: /upload/morning.png
      - image: /upload/space.png
image: /upload/space.png
teaser: All the events
layout: page/page.njk
order: 50
tags:
  - frontpage
  - menu
eleventyNavigation:
  key: Page
  order: 0
eleventyExcludeFromCollections: false
collection: ""
---
