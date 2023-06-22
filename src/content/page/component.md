---
title: Components
card:
  title: Title from a card
  image: /content/upload/spaceship.png
  alt: alt text for image
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    "
components:
  - type: pagecard
    template: components/pagecard/pagecard.liquid
    page:
      - /
      - foo
      - component
  - type: calendar
    date_start: 2023-06-10 09:00:10
    date_end: 2023-06-10 11:59:45
    date_allday: true
    template: components/calendar/calendar.liquid
  - type: calendar
    date_start: 2023-06-10 09:00:10
    date_end: 2023-06-12 11:59:45
    date_allday: false
    template: components/calendar/calendar.liquid
  - type: njktemplate
    template: components/templates/socialmedia.liquid
  - type: njktemplate
    template: components/templates/all-pages.liquid
  - type: njktemplate
    template: components/templates/all-post.liquid
  - type: collection
    title: This is a Collection
    template: components/collection/collection.liquid
    collection: saga11
    text: lorem ip...
  - type: image
    template: components/image/image.liquid
    title: image and text
    image: /content/upload/spaceship.png
    alt: This is an rocket going to the moon
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: text
    template: components/text/text.liquid
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: cta
    template: components/cta/cta.liquid
    title: "This is a CTA "
    url: /
    cta: "CTA Text "
    image: /content/upload/spaceship.png
    alt: alt text for this image
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: download
    template: components/download/download.liquid
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
  - type: links
    template: components/link/link.liquid
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
  - type: testamonials
    template: components/testamonial/testamonial.liquid
    title: Our users say
    text: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    testamonial:
      - title: Everything is awesome
        text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        image: /content/upload/spaceship.png
        person: Name
        persontitle: title
        url: https://saga11.dev
      - title: Everything is awesome
        text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        image: /content/upload/spaceship.png
        person: Name
        persontitle: title
        url: https://saga11.dev
      - title: Everything is awesome
        text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        image: /content/upload/spaceship.png
        person: Name
        persontitle: title
        url: https://saga11.dev
  - type: price
    template: components/price/price.liquid
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
  - type: images
    template: components/images/images.liquid
    title: image gallery slide
    images:
      - image: /content/upload/spaceship.png
        title: alt text first image
      - image: /content/upload/4hundo.gif
        title: alt text seconda image
  - type: images
    template: components/images/images-grid.liquid
    title: image gallery grid
    images:
      - image: /content/upload/spaceship.png
        title: alt text first image
      - image: /content/upload/4hundo.gif
        title: alt text seconda image
    text: "lorem "
  - type: form
    title: Form component
    name: contact
    action: /submitted
    template: components/form/form.liquid
    text: "This is a webform "
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
    template: components/address/address.liquid
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
image: https://images.unsplash.com/photo-1496449903678-68ddcb189a24
tags:
  - saga11
  - rssfeed
order: 3
url: component
layout: page/page.liquid
date: 2023-06-12 11:58:55
eleventyExcludeFromCollections: false
eleventyNavigation:
  title: Components
  parent: main
  key: component
  order: 10
  excerpt: "*This is the text for the menu*"
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

picture img="/content/upload/spaceship.png", alt="this is an image of a Space ship movie Space ship people get up from sleeping coffin and have eat. Computer woman find strange noisisng on planet and astonauts go to seeing. astonauts find big elephant man who dead then find to many egg."




