---
title: "Componenet Images "
url: gallery
card:
  image: /upload/midnight.png
  teaser: "Teaser text : Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum. ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. "
  alt: Midnight image
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    "
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
      - image: /upload/midnight.png
      - image: /upload/image5.png
        title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - type: text
    template: components/text/text.njk
    text: >-
      # Lorem Lorem ipsum dolor sit amet


      lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


      ## Lorem Lorem ipsum dolor sit amet


      lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


      ### Lorem Lorem ipsum dolor sit amet


      lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  - type: images
    template: components/images/images.njk
    images:
      - image: /upload/image2.png
        title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
      - image: /upload/image1.png
      - image: /upload/image5.png
tags:
  - test
eleventyNavigation:
  key: Gallery
layout: page/page.njk
eleventyExcludeFromCollections: false
---
