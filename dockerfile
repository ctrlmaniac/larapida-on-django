FROM python:3.11-alpine3.16

WORKDIR /home

RUN apk add curl 

RUN curl -sSL https://install.python-poetry.org | python3 -

ARG poetry=/root/.local/bin/poetry

# Configure Poetry
RUN ${poetry} config virtualenvs.in-project true

# Copy dependencies configuration files
COPY poetry.lock /home/poetry.lock
COPY pyproject.toml /home/pyproject.toml

# Copy webapp
COPY webapp /home/webapp

# Install dependencies
RUN ${poetry} install --only main

RUN ${poetry} run python webapp/manage.py collectstatic --no-input --clear
RUN ${poetry} run python webapp/manage.py migrate

CMD [ "/root/.local/bin/poetry", "run", "gunicorn", "-w", "2", "-b", ":8000", "webapp.webapp.wsgi:application" ]