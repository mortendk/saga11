---
title: page with multiple sections
url: sections
card:
  image: /upload/morning.png
  alt: card
  teaser: "super duper card "
sections:
  - type: related
    title: "Related pages "
    relatedpages:
      - contact
      - post
      - sections
  - type: Downloads
    title: Download
    files:
      - file: /upload/cyber.png
  - type: image
    image: /upload/space.png
    alt: image alt text
    title: Title for the image section
    text: "and text for this image "
  - type: text
    text: Text from section text element
  - type: form
    title: Contact
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
tags:
  - frontpage
  - menu
layout: page/page.njk
order: 50
teaser: All the events
eleventyNavigation:
  key: Page
  order: 0
eleventyExcludeFromCollections: false
image: /upload/space.png
collection: ""
---

body text
