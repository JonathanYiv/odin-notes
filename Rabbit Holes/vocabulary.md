TTY:
    origin - TeleTYpewriter
    accessed by Ctrl+Alt+F1 through F6
    You can minimize them my moving to Ctrl+Alt+F7


Gzipping
    a form of data compression
    the HTTP protocol includes the ability to gzip data
    this reduces the bandwidth costs for serving your site


Netlify
    Netlify is a static website hosting provider that aims to implement the workflow of: push to your git repository, Netlify automatically sees the update and pulls the code to its own servers, runs an SSG generator specified by you, then distributes your content to its CDN to deliver pre-built static pages to visitors.
    Netlify load balances accordingly to reduce load times.


JAMstack
    Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

    JavaScript
        Any dynamic programming during request/response is handled by JavaScript running entirely on the client
        could be any framework/library/vanilla
    APIs
        All server-side processes or database actions are abstracted into reusable APIs accessed over HTTP with JavaScript
        can be third-party or custom-built
    Markup
        templated markup is prebuilt at deploy time, usually using a site generator for content
        or a build tool for webapps

    Sites that don't use JAMstack rely on a tight coupling between a client and server
    (i.e. server-side CMS, monolithic server-run web app, single page app with isomorphic rendering)

    Benefits
        Better Performance
        Higher Security
        Easier scaling


Isomorphic JavaScript/Universal JavaScript
    Isomorphic: corresponding or similar in form and relations OR having the same crystalline form

    an isomorphic application is one whose code (generally JavaScript) can run both in the server and the client
    aka the pages are rendered both client and server side

    on your first request to a site, the server will run the javascript and send the prebuilt page to you
    your browser will asynchronously download the application itself
    further requests, when the application is downloaded, will be ran on the client-side application

    Benefits
        SEO
        Performance
        Maintainability


Single-Page Applications (SPAs)
    site/app that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server

    Benefits
        Faster
        User-friendliness
        Loading data asynchronously

    Downsides
        search engines don't support client side rendering when crawling websites
        larger downloads over time due to front-end JS
        users must be using JS

    Usage
        SPAs are often built for protected apps (username/password)
        therefore they don't need web indexing

    History
        1) Pages refresh every time an interaction occurred
        2) SPAs dynamically rewrite the current page


Headless Browser
    ?

Progressive Web Apps (PWAs)
    ?

Service Objects
    ?

Web Sockets
    ?

ActiveStorage
    ?


Netlify CMS
    JAMstack based CMS which uses Netlify as a hosting service

    open-source React app the wraps the git workflow


Template Engine
    combines template with a data model (interpolation, effectively) to produce result documents
    written in a template language (such as erb)

    Is a preprocessor specific to documents with compile-time execution


Liquid
    A template language
    created by Shopify 
    written in Ruby

YAML
    YAML Ain't Markup Language
    Human-friendly data serialization standard
    .yaml, .yml

Serialization
    converting an object into a stream of bytes to store the object or transmit it to memory/database/file

Byte
    a group of binary digits or bits (8) operated on as a unit

"YAML is a Superset of JSON"
    Inverse: JSON is a subset of YAML
    Meaning YAML has everything JSON has and more
    and that JSON has some features of YAML

    So this means:
        A YAML parser can understand JSON
        but a JSON parser can't understand YAML