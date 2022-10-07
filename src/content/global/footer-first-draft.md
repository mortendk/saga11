---
title: Footer
area: footer
components:
  - type: text
    template: components/text/text.njk
    text: bla bla bla b
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
layout: global/global.njk
eleventyExcludeFromCollections: false
---
