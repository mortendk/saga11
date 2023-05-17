# NetlifyCMS

Saga11 uses netlifycms as an ui to edit the site

## Admin Setup

### Content types (collections)

A content type is a "collection" in netlifycms termonology, but to not everything to messy we keep the name "content type"

### Fields are shared field types that can be reused

## Local setup

The ui is located at localhost:3791/admin.
to make it work online a bit more setup is needed

### custom content types (aka colllections in ncms language)

the definitions can be added to \_custom

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
