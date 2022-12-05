---
title: All existing components :)
image: /upload/spaceship.png
card:
  title: Title from a card
  image: /upload/spaceship.png
  alt: alt text for image
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    "
components:
  - type: form
    title: Form component
    name: contact
    action: /submitted
    template: components/form/form.njk
    text: "T﻿his is a webform "
    elements:
      - type: options
        inputtype: Checkbox
        required: false
        title: "You got to "
        option:
          - checked: true
            title: Check your self
          - checked: false
            title: Wreck your self
      - type: options
        inputtype: Radio
        required: false
        title: Who killed the radio star?
        option:
          - checked: false
            title: Godzilla
          - checked: true
            title: "The television "
      - type: options
        inputtype: Dropdown
        required: false
        title: Dropdown
        option:
          - checked: false
            title: " Gerald of Rivia"
          - checked: false
            title: "Aragorn "
      - type: textarea
        title: Message
        required: false
      - type: text
        inputtype: text
        required: false
        title: name
        placeholder: Name
      - type: text
        inputtype: email
        required: true
        title: email
        placeholder: email
  - type: Address
    template: components/address/address.njk
    title: This is an adresse
    address:
      - name: name 1
        street: street
        zip: "1234"
        country: denmark
        locality: copenhagen
        phone: "1234567889"
        url: https://saga11.dev
        email: foobar@saga11.dev
      - name: name 2
        street: street
        zip: "1234"
        country: denmark
        locality: copenhagen
        phone: "1234567889"
        url: https://saga11.dev
        email: foobar@saga11.dev
      - name: name 3
        street: street
        zip: "1234"
        country: denmark
        locality: copenhagen
        phone: "1234567889"
        url: https://saga11.dev
        email: foobar@saga11.dev
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: images
    template: components/images/images-grid.njk
    title: image gallery alternative
    text: this is a gallery with another template
    images:
      - image: /upload/4hundo.gif
      - image: /upload/spaceship.png
        title: "image title "
  - type: images
    template: components/images/images.njk
    images:
      - image: /upload/spaceship.png
        title: alt text 2
      - image: /upload/spaceship.png
        title: "alt text "
    title: image gallery
    text: "lorem "
  - type: price
    template: components/price/price.njk
    title: Price table
    price:
      - featured: false
        title: Small
        price: "100"
        text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        elements:
          - active: false
            title: "Super awesome "
          - active: true
            title: Awesome
        url: https://saga11.dev
      - featured: true
        title: Normal
        price: "200"
        text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        url: https://saga11.dev
        elements:
          - active: true
            title: Super Awesome
          - active: true
            title: awesome
      - featured: false
        title: Lux
        price: "999"
        text: another thing
        url: "#"
        elements:
          - active: true
            title: super super awesome
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: testamonials
    template: components/testamonial/testamonial.njk
    title: Our users say
    text: lorem
    testamonial:
      - title: Everything is awesome
        text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        image: /upload/spaceship.png
        person: Name
        persontitle: title
        url: https://saga11.dev
  - type: links
    template: components/link/link.njk
    title: Links
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    link:
      - url: https://saga11.dev
        title: Saga11
      - url: https://11ty.dev
        title: 11ty
  - type: download
    template: components/download/download.njk
    files:
      - file: https://github.com/mortendk/saga11/archive/refs/tags/v.0.2.2-beta.zip
        title: "Download Saga11 beta "
    title: Download
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: features
    template: components/feature/feature.njk
    title: Feature
    text: lorem..
    feature:
      - icon: icons/beaker.svg
        title: This is a feature
        text: This is why this is amazing
      - icon: icons/beaker.svg
        title: This is a feature
        text: This is why this is amazing
      - icon: icons/beaker.svg
        title: This is a feature
        text: This is why this is amazing
      - icon: icons/beaker.svg
        title: This is a feature
        text: This is why this is amazing
  - type: cta
    template: components/cta/cta.njk
    title: "This is a CTA "
    url: /
    cta: "CTA Text "
    image: /upload/spaceship.png
    alt: alt text for this image
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: text
    template: components/text/text.njk
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: calendar
    date_start: 2022-09-26 14:20:59
    date_end: 2022-09-26 14:21:02
    date_allday: true
    template: components/calendar/calendar.njk
  - type: pagecard
    template: components/pagecard/pagecard.njk
    page:
      - /
  - type: image
    template: components/image/image.njk
    title: image and text
    image: /upload/spaceship.png
    alt: This is an rocket going to the moon
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: collection
    title: This is a Collection
    template: components/collection/collection.njk
    collection: saga11
    text: lorem ...
  - type: njktemplate
    template: components/templates/all-tags.njk
  - type: njktemplate
    template: components/templates/all-post.njk
  - type: njktemplate
    template: components/templates/all-pages.njk
tags:
  - saga11
  - test
url: component
eleventyNavigation:
  title: Components
  parent: main
  key: component
  order: 10
  excerpt: "*This is the text for the menu*"
layout: page/page.njk
eleventyExcludeFromCollections: false
---

**This is probably the best description ever of a movie**

> Space ship movie
> Space ship people get up from sleeping coffin and have eat.
> Computer woman find strange noisisng on planet and astonauts go to seeing. astonauts find big elephant man who dead then find to many egg.

# h1 Heres a title

## h2 Heres a title

### h3 Heres a title

`this is a small code block`

- liste item a
- liste item b

this is _italic_ and this is **bold**

```html
<h1>code</h1>
```

This is an image

{% picture img="/upload/spaceship.png", alt="this is an image of a Space ship movie Space ship people get up from sleeping coffin and have eat. Computer woman find strange noisisng on planet and astonauts go to seeing. astonauts find big elephant man who dead then find to many egg." %}
