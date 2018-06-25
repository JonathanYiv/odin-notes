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
    a browser without a graphical user interface
    provide automated control of a web page but are executed via a command-line interface or using network communication

    usecases:
        test automation
        screenshots of web pages
        scraping websites for data
        automating interaction of web pages
        DDOS attacks
        increase advertisement impressions

Progressive Web Apps (PWAs)
    a checklist of several features that indicates your website is 'like an app'

    Requirements:
        Progressive - work for every user, regardless of browser choice, because built with progressive enhancement
        Responsive - fit everything
        Connectivity Independent - enhanced with service workers to work offline or on low quality networks (downloads)
        App-like - uses the app-shell model to provide app-style navigation and interactions
        Fresh - Always up-to-date thanks to the service worker update process
        Safe - use HTTPS
        Discoverable - identifiable as "applications" thanks to W3C manifests and service worker registration scope
        Re-engageable - has push notifications and other re-engagement features
        Installable - lets users keep apps 
        Linkable - easiily sharable via URL without complex installation

Service Worker
    event-driven worker registered against an origin and a path
    is a JS file that can control the web page/site it is associated with
        by:
        intercepting and modifying navigation/resource requests
        caching resources in a granular fashion
    it has:
        no DOM access
        runs on a different thread to the main JS
        asynchronous, so can't use with synchronous APIs
        only runs on HTTPS

    so basically a JS file that is downloaded and changes stuff asynchronously to help improve the experience, but is slightly restricted for security

Service Objects (Rails)
    Extracts logic from controllers to keep them skinny
    promotes DRYness and allows you to reuse service objects
    is a standalone class that is not inheriting or extending any other classes from Ruby or Rails

    for code that shouldn't be in the model (manages data), can't fit in the controller (keep it skinny), and is too complex for the view

Web Sockets
    an API technology that opens an interactive communication session between a user's browser and a server
    send messages to a server and receive event-driven responses without having to poll the server for a reply
    poll:
        continuous checking of other programs/devices by one program/device to see what state they are in

    more technically,
        allows a long-held single TCP socket connection to be established between a client and server. Allows instant distribution of messages both ways with little overhead with low latency

Low Latency
    a computer network optimized to process a very high volume of data messages with minimal delay

Latency
    delay

TCP (Transmission Control Protocol)
    protocol: governs how data is transferred from one system to another
    protocol suite: collection of protocols designed to work together
        TCP/IP is the standard
    protocol stacks: each level of the stack is a different protocol and serves a particular function
        is advantageous to keep the protocols split for SRP

    TCP/IP is a 4 Layer Protocol Stack
        Application (level 1):            SMTP, FTP, HTTP, POP3, IMAP4, SNMP
        Transport (level 2):              TCP, UDP
        Networking (level 3):             IP
        Datalink and Physical (level 4):  Ethernet

Socket
    endpoint instance defined by an IP address and a port in the context of either a particular TCP connection or the listening state

Port
    a virtualisation identifier defining a service endpoint
    so the Port says where the Socket is at an IP Address, whereas the socket is the actual endpoint

ActiveStorage
    facilitates uploading files to a cloud storage service (Amazon S3, Google Cloud Storage, Microsoft Azure Storage) and attaching those files to Active Record objects
    comes with a local disk-based service for dev/test and supports mirroring files to subordinate services for backups and migrations


React Native
    create mobile apps on Android and iOS platforms with JavaScript only
    built on top of ReactJS
    a framework with a hierarchy of mobile UI components specifically, whereas ReactJS is components for general UI

JSX
    a syntax extension to JavaScript
    a templating language with JavaScript basically
    used in react

RxJS
    ?!?!
    https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
        This is way over my head at the moment.. Let's save this for later

Scrum vs Agile vs Kanban
    Agile software development is based on an incremental, iterative approach.
    Open to changing requirements over time using constant feedback from end-users.
    Cross-functional teams work on iterations of a product. Work is organized into a backlog prioritized based on business/customer value.
    Each iteration should produce a working product.

    Scrum is a subset of Agile.
    Fixed-length iterations called sprints, lasting one to two weeks long, to ship software on a regular cadence.
    In between sprints, stakeholders/team members meet to plan next steps.
    Sprint Plan -> Daily Stand-up -> Sprint Demo -> Sprint Retrospective

    Kanban is a visual framework to implement Agile - a technique for managing a software development process in a highly efficient way.
    Small incremental changes to your current system.
    Can be used with existing workflows.

    AGILE vs SCRUM
        Scrum is a methodology to implement the Agile philosophy
        
    AGILE vs KANBAN
        Iterations vs Continuous Flow
        Specific usecases vs General usecase
        
    SCRUM vs KANBAN
        Specific roles vs no speecific roles
        Timeboxed iterations vs regular cadence of iterations
        Resists changes vs embraces change
        Scrum board is reset vs Kanban board continues indefinitely
        Cross-functional vs not

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