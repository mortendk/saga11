---
title: mail list setup
url: tes-tmail-list
components:
  - type: form
    title: Singup suckers
    name: maillist
    action: https://list.trve.dk/subscription/form
    template: components/form/form.liquid
    elements:
      - type: options
        inputtype: Radio
        required: false
        title: drop
        option:
          - checked: true
            title: two
            name: name tywo
            value: "2"
          - checked: false
            title: label 1
            name: name1
            value: this is one
      - type: options
        inputtype: Checkbox
        required: false
        title: Mail list
        option:
          - checked: false
            title: List name yo
            value: 300de0ed-c422-49c8-b8e8-010ebcab3f04
      - type: text
        inputtype: hidden
        required: false
        name: nonce
        title: ""
        value: value
      - type: text
        inputtype: text
        required: false
        title: name
        name: Name
      - type: text
        inputtype: text
        required: true
        title: Email
        name: email
      - type: button
        title: Signup
        resettitle: Reset
order: 1
eleventyExcludeFromCollections: false
eleventyNavigation:
  target: false
seo:
  index: index
  follow: nofollow
layout: page/page.liquid
---
