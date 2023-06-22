---
title: Contact
components:
  - type: form
    title: "Contact form "
    name: formname
    action: /submitted
    template: components/form/form.liquid
    elements:
      - type: text
        inputtype: text
        required: true
        title: Name
        placeholder: "Your Name "
      - type: text
        inputtype: email
        required: true
        title: Email
        placeholder: Email
      - type: options
        inputtype: Dropdown
        required: true
        title: Dropdown
        option:
          - checked: true
            title: this is a second option
          - checked: false
            title: This is the default value
      - type: textarea
        title: Message
        required: true
    text: |-
      Y﻿ou can totally contact us :) 
      t﻿ext with stuff on it 
image: ""
order: 1
url: contact
layout: page/page.liquid
date: 2023-06-21 20:03:22
eleventyExcludeFromCollections: false
eleventyNavigation:
  excerpt: |-
    This is a text 

    D﻿o we need something badass as a internalkey 
  title: contact
  parent: main
  order: 20
---
