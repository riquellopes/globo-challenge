.SILENT:

PYTHON=venv/bin/python
PIP=venv/bin/pip

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

run: clean
	${PYTHON} manage.py runserver 0.0.0.0:5000

create-db:
	mysql -uroot -e "CREATE DATABASE IF NOT EXISTS menus"
