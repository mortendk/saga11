---
layout: page/page.njk
order: 50
url: sections
teaser: All the events
title: page with multiple sections
card:
  image: /upload/morning.png
  alt: card
  teaser: "super duper card "
components:
  - type: calendar
    date_start: 2022-08-04 00:00:00
    date_end: 2022-08-12 00:00:00
    date_allday: false
    template: components/calendar/calendar.njk
  - type: images
    title: Image Gallery
    images:
      - image: /upload/cyber.png
        title: title image 1
      - image: /upload/image1.png
        title: title image 2
      - image: /upload/dungeonmaster.png
        title: title image 3
    template: components/images/images.njk
  - type: download
    title: Download
    files:
      - file: /upload/cyber.png
    template: components/download/download.njk
  - type: collection
    title: "This is all the test data "
    collection: test
    text: "**teaser** text"
    template: components/collection/collection.njk
  - type: related
    template: components/related/related-green.njk
    relatedpages:
      - post
  - type: image
    image: /upload/space.png
    alt: image alt text
    title: Title for the image section
    text: "and text for this image "
    template: components/image/image.njk
  - type: text
    text: Text from section text element
    template: components/text/text.njk
  - type: form
    title: Contact
    template: components/form/form.njk
tags:
  - frontpage
  - menu
eleventyNavigation:
  key: Page
  order: 0
eleventyExcludeFromCollections: false
image: /upload/space.png
collection: ""
---

body text
