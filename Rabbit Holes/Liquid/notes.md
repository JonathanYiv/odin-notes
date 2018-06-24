# Liquid
* templating language extracted from Shopify, written in Ruby
* objects, tags, and filters

## Objects
* denoted by double curly braces `{{ page.title }}`

## Tags
* `{% %}`
* Used for logic and control flow
* Do not create any visible text

## Filters
* change the output of a Liquid object
* `{{ "my/fancy/url" | append: ".html" }}` outputs `/my/fancy/url.html`
* can use chain multiple filters