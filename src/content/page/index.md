---
title: welcome page
url: /
components:
  - type: text
    template: components/text/text.njk
    text: >-
      wtd test: {{ url.parent }} {{ url.path }}


      Space ship people get up from sleeping coffin and have eat.

      Computer woman find strange noisisng on planet and astonauts go to seeing. astonauts find big elephant man who dead then find to many egg.


      ## Embed Test


      this is a link by default [saga11.dev](https://saga11.dev)


      ## Markup


      {% raw %}


      ```html

      {%- if collections.allPosts %}


      <nav class="flex w-full flex-row justify-between" aria-label="Pre and Next post">
        {# #} {%- set nextPost = collections.allPosts | getNextCollectionItem(page) %} {%- set
        previousPost = collections.allPosts | getPreviousCollectionItem(page) %} {%- if nextPost or
        previousPost %} {# previous link #} {%- if previousPost %}
        <a
          href="{{ previousPost.url | url }}"
          title="{{ previousPost.data.title }}"
          class="flex w-full flex-row items-center"
        >
          <div class="w-8 text-black">{% include "svg/left.svg" %}</div>
          <div>{{ previousPost.data.title }}</div>
        </a>
        {% endif %} {# Next linl #} {%- if nextPost %}
        <a
          href="{{ nextPost.url | url }}"
          title="{{ nextPost.data.title }}"
          class="flex w-full flex-row items-center justify-end"
        >
          <div>{{ nextPost.data.title }}</div>
          <div class="w-8 text-black">{% include "svg/right.svg" %}</div>
        </a>
        {% endif %} {# /if pre of next #} {%- endif %}
      </nav>


      {%- endif %}

      ```


      {% endraw %}


      Astonauts is posses by eg demond and new egg demon is come when eat bad noodle. seven friends and cat all try to find egg demon before space ship go home but is hard working.


      * Who life life to escaping?

      * Who is bad milk blood robot?


      *Scream not working because space make deaf*


      code stuff


      ```css

      .foo {
        font-weight: bold;
      }

      ```
  - type: image
    template: components/image/image.njk
    image: /upload/default.png
    alt: null
    title: image
    text: text
eleventyNavigation:
  key: main
  title: Home
  order: 0
layout: page/frontpage.njk
eleventyExcludeFromCollections: false
---

frontpage
