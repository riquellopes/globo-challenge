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
/etc/init.d/mysql restart

# Install python packages
apt-get install -y python3.5
apt-get install -y libmysqlclient-dev
apt-get install -y python3-dev


# Install pip
wget https://bootstrap.pypa.io/get-pip.py -O /tmp/get-pip.py
python3.5 /tmp/get-pip.py
pip install virtualenv

# Install requirements
cd menus; make setup-local; make create-db
