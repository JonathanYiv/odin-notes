# Deploying Refinery CMS on a Debian 9.4 Digital Ocean Droplet with PostgreSQL Database
Last updated 3/25/2018

## Creating the Server and Setting it Up
1. Create a Debian 9.4 droplet on Digital Ocean.
  * Note: Do not import your SSH keys from your DO profile, because this will add your SSH keys to root. To harden your server access, you should not be able to SSH into root.
2. Follow the [Initial Server Setup with Debian](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-debian-8). On Step Two, creating a new user, name the user after the site-name.
3. Update your system: `sudo apt-get update && sudo apt-get upgrade`

## Install Dependencies
4. Install dirmngr: `$ sudo apt-get install dirmngr`
5. Install curl: `$ sudo apt-get install curl`
6. Install rvm: `$ \curl -sSL https://get.rvm.io | bash -s stable`
7. Start rvm: `$ source /home/USERNAME/.rvm/scripts/rvm`
8. Install ruby with rvm: `$ rvm install ruby`
9. Install ImageMagick: `$ sudo apt-get install imagemagick`
10. Update RubyGems: `$ gem update --system`
11. Install PostgreSQL and dependencies:
```
$ sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ stretch-pgdg main' > /etc/apt/sources.list.d/pgdg.list"
$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
$ sudo apt-get update
$ sudo apt-get install postgresql-9.6 libpq-dev
```
12. Start PostgreSQL: `$ sudo service postgresql start`
13. Install Refinery CMS: `$ gem install refinerycms`
14. Install unattended upgrades: `$ sudo apt-get install uattended-upgrades apt-listchanges`
15. Install Node.js
```
sudo curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt install nodejs
```
16. Install Git: `$ sudo apt-get install git-core`

## [Install Apache2](https://linode.com/docs/development/ror/ruby-on-rails-apache-debian/)
17. Install Apache: `$ sudo apt-get install apache2 apache2-doc apache2-utils`
18. Copy the default configuration file: `cp /etc/apache2/sites-available/000-default.conf /etc/acpache2/sites-available/SITENAME.com.conf`
19. Disable the default site: `$ sudo a2dissite 000-default.conf`
25. Activate the Rails site: `$ sudo a2ensite <sitename>.com.conf'
## [Install Passenger](https://www.phusionpassenger.com/library/install/apache/install/oss/rubygems_rvm/)
18. Install Passenger with Ruby: `$ gem install passenger --no-rdoc --no-ri`
19. Run the Passenger Apache module installer: `$ passenger-install-apache2-module` and follow the instructions.
  * One of the instructions will have you install apache2-threaded-dev, the package is actually named apache2-dev.
  * One of the instructions will have you paste configuration code into Apache2 conf files. [See here for where to paste](https://www.phusionpassenger.com/library/install/apache/working_with_the_apache_config_file.html)
```
# Put this in /etc/apache2/mods-available/passenger.load
LoadModule passenger_module /home/jonathanyiv/.rvm/gems/ruby-2.4.1/gems/passenger-5.2.1/buildout/apache2/mod_passenger.so
```
```
# Put this in /etc/apache2/mods-available/passenger.conf
<IfModule mod_passenger.c>
        PassengerRoot /home/jonathanyiv/.rvm/gems/ruby-2.4.1/gems/passenger-5.2.1
        PassengerDefaultRuby /home/jonathanyiv/.rvm/gems/ruby-2.4.1/wrappers/ruby
</IfModule>
```
20. Validate your installation: `$ rvmsudo passenger-config validate-install`
21. Enable Passenger with `$ sudo a2endmod passenger`

## Apache Configurations
23. Get the Ruby executable from: `passenger-config about ruby-command`
24. Open `/etc/apache2/sites-available/example.com.conf` and edit it as follows:
```
<VirtualHost *:80>
    ServerName www.example.com

    ServerAdmin webmaster@localhost
    DocumentRoot /home/username/example-app/public
    RailsEnv development
    PassengerRuby /path-to-ruby

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <Directory "/home/username/example-app/public">
        Options FollowSymLinks
        Require all granted
    </Directory>
</VirtualHost>
```

## [Pre-Deployment](https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/ownserver/standalone/oss/deploy_app_main.html)
24. Add `gem 'passenger'` to your Gemfile.
21. Clone your refinery repository to the server in /var/www/: `$ git clone <url>`
22. Follow the steps in this accepted [SO answer to properly set file permissions](https://askubuntu.com/questions/767504/permissions-problems-with-var-www-html-and-my-own-home-directory-for-a-website).
27. `$ bundle install --deployment --without development test`
28. `$ bundle exec rake secret`
29. Permanently export the secret key into the environment variable SECRET_KEY_BASE: `echo "export SECRET_KEY_BASE=..." >> ~/.profile`
30. Protect config/db:
```
$ chmod 700 config db
$ chmod 600 config/database.yml config/secrets.yml
```
31. In your database.yml file, change the production username and password to:
```
username: <%= ENV['POSTGRES_USERNAME'] %>
password: <%= ENV['POSTGRES_PASSWORD'] %>
```
32. Create your PostgreSQL username/password:
```
$ sudo -u postgres createuser <username> -s
$ sudo -i -i postgresql psql
postgres=# \du
postgres=# \password <username>
postgres=# \q
```
33. Create the Rails database: `$ bundle exec rake db:create RAILS_ENV=production`
34. Compile Rails assets and run migrations: `$ bundle exec rake assets:precompile db:migrate RAILS_ENV=production`
24. `bundle exec rake db:seed RAILS_ENV=production`

## Deployment
25. Navigate to your project directory and start passenger: `$ rvmsudo passenger start`
26. Restart Apache: `sudo systemctl restart apache2`
