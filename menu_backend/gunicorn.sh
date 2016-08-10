#!/bin/bash
NAME='menus_gunicorn'
PROJECT_PATH="/home/`whoami`/app/menu_backend"
VIRTUALENV_PATH="/home/`whoami`/app/menu_backend/venv"
ADDRESS="0.0.0.0:5000"
WORKERS=2
DJANGO_SETTINGS_MODULE="menus.settings.production"

echo "Starting $NAME as `whoami`"

source $VIRTUALENV_PATH/bin/activate

export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE

cd $PROJECT_PATH

echo $PROJECT_PATH

exec gunicorn menus.wsgi:application --bind=$ADDRESS --workers=$WORKERS --pid /tmp/gunicorn.pid --daemon
