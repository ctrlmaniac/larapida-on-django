FROM python:3.11-alpine3.16

WORKDIR /home

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY webapp .
COPY startup.sh .

ENTRYPOINT [ "/bin/bash", "startup.sh" ]
CMD [ "gunicorn", "-w", "2", "-b", ":8000", "webapp.wsgi:application" ]