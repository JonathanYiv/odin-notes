# Netlify CMS
An open-source React app that acts as a wrapper for the Git workflow.

# Adding to an SSG
1. Place an `admin/` directory in the standard static file location for your SSG
2. Create two files:
```
admin
- index.html
    # The entry point for the admin interface (i.e. navigate to yoursite.com/admin/)
- config.yml
```
3. `index.html` to pull CSS/JS for Netlify CMS from a public CDN
```html
<!doctype html>
<html>
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>

    <!-- Include the styles for the Netlify CMS UI, after your own styles -->
    <link rel="stylesheet" href="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.css" />

    </head>
    <body>
    <!-- Include the script that builds the page and powers Netlify CMS -->
    <script src="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.js"></script>
    </body>
</html>
```
4. Configuration
```yaml
# Back-End
backend:
    name: git-gateway # an open source API that acts as a proxy between authenticated users of your site and your site repo
    branch: master # Branch to update, defaults to master if not added

# Specify Media Upload Folder
media_folder: "images/uploads" # relative to the project root

# Collections
# Defines the structure for different content types on your static site
```
5. Set-up Authentication


## On Collections
### Example

This is the `post.md`
```markdown
---
layout: blog
title: "Let's Party"
date: 1999-12-31 11:59:59 -0800
thumbnail: "/images/prince.jpg"
rating: 5
---

This is the post body, where I write about our last chance to party before the Y2K bug destroys us all.
```

This is what the `collections` setting would look like:
```
collections:
    - name: "blog"                                  # Used in routes, i.e. /admin/collections/blog
      label: "Blog"                                 # Used in the UI
      folder: "_posts/blog"                         # The path to the folder where the documents are stored
      create: true                                  # Allows users to create new documents in this collection
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}"   # Filename template
      fields:                                       # Fields for each document, usually in the Front Matter
        - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
        - {label: "Title", name: "title", widget: "string"}
        - {label: "Publish Date", name: "date", widget: "datetime"}
        - {label: Featured Image", name: "thumbnail", widget: "image"}
        - {label: "Rating (scale of 1-5)", name: "rating", widget: "number"}
        - {label: "Body", name: "body", widget: "markdown"}
```
In the `fields` section, aka the fields in the content editor:
`label` is the field label in the editor UI
`name` is the field name in the document front matter
`widget` determines the UI style and value data type
`default` sets a default value for the field (optional)

### Widget Types
* Boolean
* Date
* DateTime
* File
* Hidden
* Image
* List
* Markdown
* Number
* Object
* Relation
* Select
* String
* Text