# Tailwind info

## To future me

remember if you add in a colorname in base of components thats not defined tw will break
fx:

```
.foo{
  @apply bg-notdefinedcolor;
}
```

## Design Tokens

the Core Tokens defined in designtokens.css

```
:root{
  --color-pink: #ff00ff;
}
```

and then pulled into tailwind in the designToken-color.js file

```
module.exports = {
  "primary": "var(--color-pink)",
}
```

Voila the primay color is now avalabile

```
<div class="text-primary">the funk</div>
<div class="bg-primary">the funk</div>
<div class="border-primary">the funk</div>
<div class="shadow-primary"></div>
<button class="ring-blue-500">submit</button>
<div class="h-14 bg-gradient-to-r from-primary to-secondary"></div>

```
