---
title: "Gallery "
url: gallery
card:
  image: /upload/midnight.png
  teaser: "Image gallery test page "
  alt: Midnight image
components:
  - type: images
    template: components/images/imagecards.njk
    images:
      - image: /upload/midnight.png
      - image: /upload/image2.png
        title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
      - image: /upload/image1.png
        title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
      - image: /upload/image5.png
        title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - type: images
    template: components/images/images.njk
    images:
      - image: /upload/image2.png
        title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
      - image: /upload/image1.png
      - image: /upload/image5.png
  - type: text
    template: components/text/text.njk
    text: lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
tags:
  - test
eleventyNavigation:
  key: Gallery
layout: page/page.njk
eleventyExcludeFromCollections: false
---
