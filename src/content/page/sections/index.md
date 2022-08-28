---
layout: page/page.njk
order: 50
url: "componenet collection "
teaser: All the events
title: page with multiple sections
card:
  image: /upload/morning.png
  alt: card
  teaser: "super duper card "
components:
  - type: collection
    title: "Title for a collection : test "
    collection: test
    text: >-
      **Text from the collection object**\

      lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    template: components/collection/collection.njk
  - type: njktemplate
    template: components/templates/default.njk
  - type: download
    title: Download
    files:
      - file: /upload/cyber.png
    template: components/download/download.njk
  - type: image
    image: /upload/space.png
    alt: image alt text
    title: Title for the image section
    text: "and text for this image "
    template: components/image/image.njk
  - type: text
    text: Text from section text element
    template: components/text/text.njk
tags:
  - frontpage
  - menu
eleventyNavigation:
  key: collections
  order: 0
eleventyExcludeFromCollections: false
image: /upload/space.png
collection: ""
---

body text
