---
title: Contact Page
url: contact
image: ""
components:
  - type: njktemplate
    template: components/templates/socialmedia.liquid
  - type: form
    title: "Contact form "
    name: contact
    action: /contact/thanx
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
        required: false
        title: Dropdown
        option:
          - checked: true
            title: this is a second option
            value: 2nd
          - checked: true
            title: This is the default value
            name: ""
            value: default
      - type: textarea
        title: Message
        required: true
      - type: button
        title: Send
        resettitle: Reset
        reset: true
    text: >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. 


      ## Go go 
    formdata: |-
      data-netlify="true"
      netlify-honeypot="bot-field"
order: 1
layout: page/page.liquid
date: 2023-06-21 20:03:22
eleventyExcludeFromCollections: false
eleventyNavigation:
  title: Contact
  parent: main
  order: 20
  target: false
  url: ""
  key: ""
---
text >

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

## Go go 
