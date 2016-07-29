.SILENT:

PIP=venv/bin/pip

clean:
	find . \( -name *.py[co] -o -name __pycache__ \) -delete

venv:
	virtualenv --python=python3 venv

setup: venv
	${PIP} install -U pip
	${PIP} install -r requirements.txt
