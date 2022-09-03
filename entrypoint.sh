#!/bin/sh

cd /home/webapp

poetry run python manage.py migrate
poetry run python manage.py collectstatic --no-input --clear
poetry run gunicorn -w 2 -b :8000 webapp.wsgi:application