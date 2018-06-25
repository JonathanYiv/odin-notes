# Summary
Jekyll is a static site generator/text transformation engine.
Give it content in markup (Markdown by default), and then it churns that through a layout or series of layout files (Liquid-enhanced HTML templates).
You can tweak how site URLs look, displayed data, etc, by editing text files.

Note: Any file with YAML Front Matter are subject to processing

# Commands
* `jekyll new <title>` creates a new Jekyll site
* `jekyll build` will generate the current folder into `./_site`
* `jekyll build --watch` will automatically update on changes
* `jekyll help <new/build/serve>` reveals all the potential flags for each command

# Directory Structure
_config.yml
_data
    _members.yml
_drafts
    x.md
    y.md
_includes
    footer.html
    header.html
_layouts
    default.html
    post.html
_posts
    a.md
    b.md
_sass
    _base.scss
    _layout.scss
_site
.jekyll-metadata
index.html

## Directory Explanation
* config.yml
    * Stores configuration data.
* _drafts
    * Unpublished posts.
    * Format: title.MARKUP
* _includes
    * Partials to be mixed and matched by layouts and posts
    * Usage: `{% include file.ext %}` to include `_includes/file.ext`
* _layouts
    * Templates that wrap posts.
    * Chosen on a post-by-post basis in the YAML Front Matter
    * `{{ content }}` is used to inject content into the web page.
* _posts
    * Dynamic content.
    * Format: YEAR-MONTH-DAY-title.MARKUP
* _data
    * For .yml, .yaml, .json, .csv 
    * Accessible via `site.data`, so `members.yml` would be available through `site.data.members`
* _sass
    * SASS partials that can be imported into your main.scss which will then be processed into main.css
* _site
    * Where the generated site will be placed by default.
* .jekyll-metadata
    * Helps Jekyll keep track of which files have not been modified and which files need to be regenerated
* index.html OR index.md
    * Will be transformed by Jekyll if you have a YAML Front Matter

# Configuration
You can configure in `_config.yml` or specify them as flags in the terminal.
You can also specify Front Matter defaults with scope/values pairs that define what defaults should be set for a particular file path (optionally file type as well). More specific paths for scopes will override defaults. You can also override them specifically in the file.

Note: Don't use tabs, use spaces!
Note 2: See `https://jekyllrb.com/docs/configuration` for the default config settings and other specifics.

Example:
```
defaults:
  -
    scope: 
        path: "" # empty string means all files
    values:
        layout: "default"
```
Sets the "default" layout to all files.

Example 2:
```
defaults:
  -
    scope: 
        path: "" # empty string means all files
        type: "posts"
    values:
        layout: "default"
```
Sets the "default" layout to all files of type "posts."
Types available include "pages", "posts", "drafts" or any collection on your site.

Example 3:
```
defaults:
  -
    scope: ...
    values: ...
  -
    scope:
        path: "projects"
        type: "pages"
    values:
        layout: "project"
        variable_name: "value"
```
Any file in the `projects/` folder will use the `project` layout and have the `page.variable_name` liquid variable set to "value."

# Front Matter
Any file that contains a YAML Front Matter block will be processed by Jekyll as a special file.

Example:
```
---
layout: post
title: Something something
---
```
Between the triple-dashed lines, you can set predefined variables or create custom ones.
They are then available using Liquid tags both further down and in any layouts/includes that the page/post relies on.

Note: Front Matter Variables are optional!
Example:
```
---
---
```

## Predefined Global Variables
* layout
    * specifies layout file to use
* permalink
    * specify specific URL
* published
    * set to false to hide posts

## Custom Variables
* any non-predefined variables are mixed into the data sent to the Liquid templating engine

# Static Pages
* Can place in the root folder or subfolders
* The `_site` directory will retain the same folder structure
* Can flatten pages by using the `permalink` property in the Front Matter

# Static Files
* A file without YAML Front Matter - including images, PDFs, and other un-rendered content
* accessible in Liquid via `site.static_files`
* each `file` has these metadata: `file.<path/modified_time/name/basename/extname>`
* You can add Front Matter to static files using the `defaults` property in `_config.yml`

# Variables
See here: https://jekyllrb.com/docs/variables/
For documentation regarding data made available via the Liquid templating system

# Collections
1. Tell Jekyll to read in your collection
2. Add your content
3. Optionally render your collection's documents into independent files

Note: Can specify the collections directory
Note 2: Move _posts and _drafts to this directory if so
Note 3: The directory can not start with an underscore
```
collections_dir: collections/
```

## Step One
```
collections:
  collection_name:
    metadata: value
```

Note: Can set default attributes for a collection
```
defaults:
  -
    scope:
      path: ""
      type: collection_name
    values:
      layout: page
```

## Step Two
Create a corresponding folder `collections_dir/_collection_name` and add documents.
Use a Front Matter. Everything afterwards will be pushed into the `content` attribute

## Step Three
```
collections:
  collection_name:
    output: true
```
This automatically generates public-facing rendered versions of each document in the collection.

Collections can also be accessed using `site.collection_name`
and can be looped through like so:

```
{% for item in site.collection_name %}
  ...
{% endfor %}
```

## `site.collection_name`
* Is an array of documents
* Documents have these attributes:
    * `content` - the unrendered content of the document
    * `output` - the rendered content of the document
    * `path` - full path to document's source file
* Attributes from the YAML Front Matter of a Collection can be accessed anywhere on the site

# Posts/Drafts
[For future notes]