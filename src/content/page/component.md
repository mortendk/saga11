---
title: Components overview !
url: component
image: https://images.unsplash.com/photo-1496449903678-68ddcb189a24
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
  - type: collection
    title: This is a Collection
    template: components/collection/collection.liquid
    collection: saga11
    text: "This is a collection of data "
  - type: image
    template: components/image/image.liquid
    title: image and text
    image: /content/upload/default.png
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
    image: /content/upload/default.png
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
      - url: https://liquidjs.com
      - url: https://decapcms.org
      - url: https://shopify.github.io/liquid/
      - url: https://saga11.dev
        title: Saga11
      - url: https://11ty.dev
        title: 11ty
  - type: testamonials
    template: components/testamonial/testamonial.liquid
    title: Our users say
    text: Testimonials provide valuable insights and firsthand experiences from
      satisfied customers, showcasing the exceptional quality, service, and
      satisfaction they have received from a product or company.
    testamonial:
      - title: This coffee is a delightful...
        text: This coffee is a delightful blend of rich flavors, with a smooth and
          velvety texture that leaves me craving another cup.
        image: https://images.unsplash.com/photo-1514327605112-b887c0e61c0a
        person: Lady Cortado
        persontitle: Barista
        url: ""
      - title: This CMS offers a user-friendly interface, r
        text: This CMS offers a user-friendly interface, robust features, and seamless
          customization options, making it an ideal choice for managing and
          updating websites effortlessly.
        image: https://images.unsplash.com/photo-1521336993297-77c615af0169
        person: Ragnar Lodbrok
        persontitle: Webjanitor
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
      - image: /content/upload/default.png
        title: alt text first image
      - image: /content/upload/4hundo.gif
        title: alt text seconda image
  - type: images
    template: components/images/images-grid.liquid
    title: image gallery grid
    images:
      - image: /content/upload/default.png
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
      - type: button
        title: Send
        resettitle: Reset
        reset: true
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
card:
  title: "Component overview "
  image: ""
  alt: alt text for image
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
tags:
  - saga11
  - rssfeed
order: 3
layout: page/page.liquid
date: 2023-06-12 11:58:55
eleventyExcludeFromCollections: false
eleventyNavigation:
  title: Components
  parent: footer
  key: component
  order: 50
  excerpt: "*This is the text for the menu*"
---

😍 it works{tm}

👉 To make the admin work clone the env.example to .env

🤖 go to the [admin interface admin](/admin)

💅 Themes are in /src/themes-[themename]/

📜 content is in /src/content/

🎈 saga11 is build on top of [11ty](https://11ty.dev) & [decap](https://decapcms.com)

🪲 bugs & comments [github](https://github.com/mortendk/saga11)

