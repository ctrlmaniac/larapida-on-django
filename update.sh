#!/bin/sh

cd /home
python manage.py collectstatic --no-input --clear
python manage.py migrate