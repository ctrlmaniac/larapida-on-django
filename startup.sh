#/bin/bash

cd /home
python manage.py collectstatic --no-input --clear
python manage.py migrate

gunicorn -w 2 -b :8000 webapp.wsgi:application