#!/usr/bin/env bash
set -e

# set this to skip mysql password prompt (it will be blank)
export DEBIAN_FRONTEND=noninteractive

orig_dir="$(pwd)"

sudo apt-get update
sudo apt-get upgrade -yy

# add extra repos to get latest versions
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update

# install basics
sudo apt-get install imagemagick git emacs24-nox libpcre3 libpcre3-dev gcc g++ build-essential openssl libssl-dev -yy

sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password foobar'
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password foobar'

# install mysql
sudo apt-get install mysql-server -yy
echo 'CREATE DATABASE craft;' | mysql -u root -pfoobar
# GRANT ALL ON boligvelger.* TO app@localhost IDENTIFIED BY "fluksus07"; FLUSH PRIVILEGES;

# install nginx, php, mcrypt
sudo apt-get install php5-common php5-cli php5-fpm php5-mcrypt php5-mysql php5-imagick php5-curl nginx -yy
sudo php5enmod mcrypt

cd ${orig_dir}

# copy configs and other files from repo
sudo cp /vagrant/support/serverfiles/nginx/craft.dev /etc/nginx/sites-available
sudo ln -s /etc/nginx/sites-available/craft.dev /etc/nginx/sites-enabled

# make php5-fpm and nginx run as vagrant user
sudo sed -i -- 's/www-data/vagrant/g' /etc/nginx/nginx.conf /etc/php5/fpm/pool.d/www.conf

# set time
echo "Setting correct time using NTP..."
sudo ntpdate 0.no.pool.ntp.org

# (re)start services
sudo /etc/init.d/mysql restart
sudo restart php5-fpm
sudo /etc/init.d/nginx restart

cd ${orig_dir}
