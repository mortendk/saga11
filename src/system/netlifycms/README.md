## Setup

1 Add users netlify identity
https://app.netlify.com/sites/[SITENAME]/settings/identity#external-providers

## 2 enable git gateway

https://app.netlify.com/sites/[SITENAME]/settings/identity#git-gateway

## Doc

https://preview-auth-doc--netlify-cms-www.netlify.app/docs/customization/

## note for creating new buttons

```
{% set title = "mega awesome" %}
{% set path = "mega awesome" %}
<a href="{{env.site}}/admin/#/collections/post/new?title={{title}}&url.path={{path}}"
class="bg-green-300 p-4 rounded"
target="_blank">
Post</a>


{% set title = "mega awesome" %}
<a href="{{env.site}}http://localhost:3791/admin/#/collections/page/new?title={{title}}&components.text.text=foobar"
class="bg-green-300 p-4 rounded"
target="_blank">
Page</a>
```
