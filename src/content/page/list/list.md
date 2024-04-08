---
title: "list "
url: list-test
components:
  - type: form
    title: "Mail List "
    name: formname
    action: https://list.trve.dk/subscription/form
    template: components/form/form.liquid
    elements:
      - type: text
        inputtype: hidden
        required: false
        name: nonce
      - type: text
        inputtype: email
        required: true
        title: email
        name: email
      - type: options
        inputtype: Checkbox
        required: true
        title: LIst
        option:
          - checked: false
            title: Mdk list
            name: l
            value: 300de0ed-c422-49c8-b8e8-010ebcab3f04
      - type: button
        title: Send
        resettitle: Reset
    text: ""
    javascript: console.log('foo');12313
order: 1
eleventyExcludeFromCollections: false
eleventyNavigation:
  target: false
seo:
  index: index
  follow: nofollow
layout: page/page.liquid
---
