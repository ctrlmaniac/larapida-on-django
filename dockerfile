FROM python:3.11-alpine3.16

WORKDIR /home

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY webapp .

RUN python manage.py collectstatic --no-input --clear
RUN python manage.py migrate

CMD [ "gunicorn", "-w", "2", "-b", ":8000", "webapp.wsgi:application" ]