---
title: page with multiple sections
url: sections
sections:
  - type: images
    title: Image Gallery
    images:
      - image: /upload/cyber.png
        title: title image 1
      - image: /upload/image1.png
        title: title image 2
      - image: /upload/dungeonmaster.png
        title: title image 3
  - type: collection
    title: "This is all the test data "
    collection: test
    text: "**teaser** text"
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
