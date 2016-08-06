#!/usr/bin/env bash
export DEBIAN_FRONTEND=noninteractive

# Adding repository
apt-get install -y software-properties-common
add-apt-repository ppa:fkrull/deadsnakes

# Updating
apt-get update

# Installing Mysql
DB_PASS=
debconf-set-selections <<< "mysql-server mysql-server/root_password password $DB_PASS"
debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $DB_PASS"

apt-get install -y mysql-server-5.5
cp /home/vagrant/menus/confs/my.conf /etc/mysql/my.conf
service mysql restart

# Install nodejs dependencies
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash
apt-get install -y nodejs
apt-get install -y npm
npm install grunt grunt-cli -g
npm install

# Install python packages
apt-get install -y python3.5
apt-get install -y libmysqlclient-dev
apt-get install -y python3.5-dev


# Install pip
wget https://bootstrap.pypa.io/get-pip.py -O /tmp/get-pip.py
python3.5 /tmp/get-pip.py
pip install virtualenv

# Install requirements
cd menus; make setup-local; make create-db
