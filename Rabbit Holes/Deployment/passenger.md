# Resource
* [Stack Overflow Answer explaining Phusion Passenger](https://stackoverflow.com/questions/4113299/ruby-on-rails-server-options)

# Definitions
* Application Server
    * an application which loads an app inside its own process space
    * sets up a TCP socket allowing it to communicate with the internet and listens for HTTP requests
    * passes the request data to the web app, which returns an object describing the HTTP response
    * then it turns that object into an actual HTTP response and sends it back over the socket
    * Examples: Mongrel, Phusion Passenger, Rainbows, Unicorn, Thin, Puma, Trinidad, TorqueBox, WEBrick (only suitable for dev env)
        * Some of these can be exposed to the internet (Phusion Passenger, Rainbows)
        * and some can not, and must be put behind a reverse proxy web server like Apache and Nginx
            * Reason being:
                * some app servers can only handle 1 request concurrently per process, and require multiple app server instances
                * aka an app server cluster, which nginx/apache2 must reverse proxy and distribute requests to the cluster
                * Apache and Nginx are very good at buffering requests/responses because they are multi-threaded or evented
                * Apache/Nginx are very good at serving static files
                * Apache/Nginx are good at handling I/O Security, HTTP concurrency management, connection timeouts, etc
* Web Server
    * serve static files
    * can act as reverse proxies (take an incoming HTTP request and forward it to another HTTP-speaking server which replies with an HTTP response, which then forwards it back to the client)
    * with modules, can serve web apps in PHP
    * Examples: Nginx, Apache2
* Phusion Passenger
    * integrates directly into Apache or Nginx (comparable to `mod_php` for Apache2)
    * allows Apache/Nginx to serve Ruby apps
* Release Automation Tool
    * Ruby's tool is called Capistrano
    * These do the preparation work prior to deployment (the act of starting an app within an application server)
        * Uploads code to the server
        * Installs dependencies
        * Sets up the database
        * Start/stop daemons
        * Etc

# Passenger Basics
* Nginx and Apache2 are Web Servers - provide HTTP transaction handling and serve static files
* They can not run Ruby applications, and therefore must be run with an application server such as Passenger
* Application Servers allow Ruby apps to speak HTTP