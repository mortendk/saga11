---
title: images
url: images
card:
  text: "test images "
  image: /upload/dungeonmaster.png
components:
  - type: images
    template: components/images/imagecards.njk
    images:
      - image: /upload/image4.png
      - image: /upload/image2.png
      - image: /upload/image1.png
      - image: /upload/image.png
      - image: /upload/dungeonmaster.png
      - image: /upload/cyber.png
  - type: images
    template: components/images/images.njk
    images:
      - image: /upload/image4.png
      - image: /upload/image3.png
      - image: /upload/image2.png
      - image: /upload/image1.png
      - image: /upload/cyber.png
eleventyNavigation:
  key: image
  parent: main
  title: Image
layout: page/page.njk
eleventyExcludeFromCollections: false
---
