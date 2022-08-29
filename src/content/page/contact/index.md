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
    title: Mail signup
    template: components/form/form.njk
    elements:
      - inputtype: email
        required: true
        title: Email
        placeholder: email@saga11.dev
    name: Mail sigunup test
  - type: form
    title: How to get in contact with us :)
    template: components/form/form.njk
    text: lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    elements:
      - inputtype: text
        required: true
        title: You first name
        placeholder: "Your Name "
      - inputtype: email
        required: true
        title: Email
        placeholder: "@foobar.dk"
      - inputtype: url
        required: false
        title: web
        placeholder: website
      - inputtype: tel
        required: false
        title: Phone
        placeholder: phone
      - inputtype: textarea
        required: false
        title: Message
        placeholder: Yo yo yo Write
    name: "The contact form yo "
tags:
  - menu
eleventyNavigation:
  key: Contact
  order: 100
eleventyExcludeFromCollections: false
image: /upload/image.png
collection: collection
---
