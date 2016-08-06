.SILENT:

PYTHON=menu_backend/venv/bin/python
PIP=menu_backend/venv/bin/pip
PY_TEST=menu_backend/venv/bin/py.test

clean:
	find . \( -name *.py[co] -o -name __pycache__ \) -delete

venv:
	virtualenv --python=python3.5 menu_backend/venv

setup: venv
	${PIP} install -U pip
	${PIP} install -r menu_backend/requirements.txt

setup-local: venv
	${PIP} install -U pip
	${PIP} install -r menu_backend/requirements.txt
	${PIP} install -r menu_backend/requirements_dev.txt

debug: clean
	${PYTHON} menu_backend/manage.py runserver 0.0.0.0:5000 --settings=menus.settings.base

makemigrations:
	${PYTHON} menu_backend/manage.py makemigrations --settings=menus.settings.base

migrate:
	${PYTHON} menu_backend/manage.py  migrate --settings=menus.settings.base

create-db:
	mysql -uroot -e "CREATE DATABASE IF NOT EXISTS menus"

test: clean
	${PY_TEST} menu_backend/ -s -r a --color=yes
