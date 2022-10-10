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
    text: t﻿his is a gallery with another template
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
    text: "l﻿orem "
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
        text: a﻿nother thing
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
    text: l﻿orem
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
    text: l﻿orem..
    feature:
      - icon: icons/beaker.svg
        title: This is a feature
        text: T﻿his is why this is amazing
      - icon: icons/beaker.svg
        title: This is a feature
        text: T﻿his is why this is amazing
      - icon: icons/beaker.svg
        title: This is a feature
        text: T﻿his is why this is amazing
      - icon: icons/beaker.svg
        title: This is a feature
        text: T﻿his is why this is amazing
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
  - type: form
    title: Contact
    name: Contact
    action: Contact
    template: components/form/form.njk
    elements:
      - inputtype: text
        required: true
        title: Name
        placeholder: you name
      - inputtype: textarea
        required: true
        title: Message
        placeholder: Your Message
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
  - type: pagecard
    template: components/pagecard/pagecard.njk
    page:
      - /
  - type: image
    template: components/image/image.njk
    title: image and text
    image: /upload/spaceship.png
    alt: alt text
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
    text: l﻿orem ...
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

# h1 H﻿eres a title

## h2 H﻿eres a title

### h3 H﻿eres a title

`this is a small code block`

- liste item a
- liste item b

t﻿his is _italic_ and this is **bold**

```html
<h1>code</h1>
```

This is an image

{% picture img="/upload/spaceship.png", alt="this is an image of a Space ship movie Space ship people get up from sleeping coffin and have eat. Computer woman find strange noisisng on planet and astonauts go to seeing. astonauts find big elephant man who dead then find to many egg." %}
