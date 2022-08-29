---
alt: null
layout: page/page.njk
sections:
  - type: form
    title: Contact
order: 100
title: Contact
url: contact
teaser: Contact page teaser
card:
  image: /upload/spaceship.png
components:
  - type: form
    title: Contact
    template: components/form/form.njk
    text: body text
    elements:
      - inputtype: url
        required: false
        title: web
        placeholder: website
      - inputtype: tel
        required: false
        title: Phone
        placeholder: phone
      - inputtype: email
        required: true
        title: Email
        placeholder: "@foobar.dk"
      - inputtype: text
        required: true
        title: You first name
        placeholder: "Your Name "
tags:
  - menu
eleventyNavigation:
  key: Contact
  order: 100
eleventyExcludeFromCollections: false
image: /upload/image.png
collection: collection
---
