FROM python:3.11-alpine3.16

WORKDIR /home/webapp

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY webapp .

CMD [ "python", "manage.py", "collectstatic", "--noinput", "--clear", "&", "python", "manage.py", "migrate", "&", "gunicorn", "-w", "2", "-b", ":8000", "webapp.wsgi:application" ]