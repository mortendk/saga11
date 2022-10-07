---
title: A Footer Block
blockposition: footer
components:
  - type: Address
    template: components/address/address.njk
    address:
      - street: flensborgade 32 st th
        zip: "1669"
        country: danmark
        locality: vesterbro
        name: morten
        phone: "29700666"
        url: https://morten.dk
        email: email@morten.dk
  - type: njktemplate
    template: components/templates/socialmedia.njk
layout: block/block.njk
eleventyExcludeFromCollections: false
---
