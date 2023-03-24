FROM python:3.11-alpine3.16

WORKDIR /home
COPY update.sh .

WORKDIR /home/webapp

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY webapp .

ENTRYPOINT [ "/home/update.sh" ]
CMD [ "gunicorn", "-w", "2", "-b", ":8000", "webapp.wsgi:application" ]