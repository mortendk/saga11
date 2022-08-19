---
title: All Post
url: post
image: midnight.png
alt: Mountains
teaser: Post from the blog
tags:
  - frontpage
  - menu
layout: page/collection-all-post.njk
menulabel: Post
eleventyExcludeFromCollections: false
---

The page here uses the template collection-all-post.njk whichs calls all posts

{% raw %}

```twig
{% for item in collections.allPosts  %}

{% endfor %}
....

```

{% endraw %}
