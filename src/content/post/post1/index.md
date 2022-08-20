---
title: Space ship movie
url: Space-ship-movie
image: spaceship.png
alt: A majestic spaceship
teaser: >
  Space ship people get up from sleeping coffin and have eat.

  Computer woman find strange noisisng on planet and astonauts go to seeing. astonauts find big elephant man who dead then find to many egg.
tags:
  - event
date_start: 2022-08-09 19:30
date_end: 2022-08-10 21:30
date_allday: false
date: 2022-08-09 19:31:03
layout: post/post.njk
eleventyExcludeFromCollections: false
---

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

- Who life life to escaping?
- Who is bad milk blood robot?

_Scream not working because space make deaf_

code stuff

```css
.foo {
  font-weight: bold;
}
```

## Image test

more data below12313
