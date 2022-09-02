---
alt: null
layout: page/page.njk
sections:
  - type: form
    title: Contact
order: 100
title: Contact
url: contact
card:
  image: /upload/spaceship.png
  title: "this is the card "
  alt: "card alt text "
  text: "this is my text for a card "
components:
  - type: form
    title: Contact
    name: Contact
    template: components/form/form.njk
    elements:
      - inputtype: date-time
        required: false
        title: date
      - inputtype: email
        required: true
        title: email
        placeholder: "@foo.dk"
tags:
  - menu
eleventyNavigation:
  key: Contact
  order: 100
eleventyExcludeFromCollections: false
collection: collection
---
