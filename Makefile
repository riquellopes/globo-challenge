.SILENT:

PYTHON=venv/bin/python
PIP=venv/bin/pip
PY_TEST=venv/bin/py.test

clean:
	find . \( -name *.py[co] -o -name __pycache__ \) -delete

venv:
	virtualenv --python=python3.5 venv

setup: venv
	${PIP} install -U pip
	${PIP} install -r requirements.txt

setup-local: venv
	${PIP} install -U pip
	${PIP} install -r requirements.txt
	${PIP} install -r requirements_dev.txt

debug: clean
	${PYTHON} manage.py runserver 0.0.0.0:5000 --settings=menus.settings.base

create-db:
	mysql -uroot -e "CREATE DATABASE IF NOT EXISTS menus"

test: clean
	${PY_TEST} -s -r a	--color=yes
