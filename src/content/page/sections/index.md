---
layout: page/frontpage.njk
order: 50
url: /
teaser: All the events
title: page with multiple sections
card:
  image: /upload/morning.png
  alt: card
  teaser: "super duper card "
  text: dsjgds;kj
components:
  - type: price
    template: components/price/price.njk
    title: "Pricing "
    image: /upload/cyber.png
    text: lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    price:
      - title: Starter
        text: "For starter projects "
        price: "100"
        elements:
          - active: true
            title: Fast as Fuck
          - title: Markup
            active: true
          - active: false
            title: Crappy
      - title: medium
        text: "For starter projects "
        price: "300"
        elements:
          - active: true
            title: Crappy
          - active: true
            title: Fast as Fuck
          - title: Markup
            active: true
        featured: true
  - type: features
    template: components/feature/feature.njk
    title: "This is all the awesome features "
    image: /upload/image.png
    text: lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    feature:
      - title: Markdown for awesome
        text: "Markdown is lit "
        image: /upload/css3_logo.svg
      - title: Complete Seperation of front and back
        text: >-
          Configuration is done in yml files and then worked with in the
          templates


          No "settings" etc
        image: /upload/dungeonmaster.png
  - type: testamonials
    template: components/testamonial/testamonial.njk
    title: What people are saying
    image: /upload/image1.png
    text: >-
      lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.


      ## doobar
    testamonial:
      - title: Cool shit braaa
        text: >-
          lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in


          ## reprehenderit in voluptate velit esse

          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        image: /upload/image.png
        person: persona
        persontitle: "person title "
        url: https://twitter.com/footballinDK/status/1564221130998747138
      - title: Super Awesome
        text: "this is super duper awesome  "
        image: /upload/dungeonmaster.png
        person: Dungeon master
        persontitle: El Jefe
  - type: collection
    title: "Title for a collection : test "
    collection: test
    text: >-
      ## Text from the collection object


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
    text: lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    template: components/text/text.njk
tags:
  - test
eleventyNavigation:
  key: collections
  order: 0
eleventyExcludeFromCollections: false
image: /upload/space.png
collection: ""
---

body text
