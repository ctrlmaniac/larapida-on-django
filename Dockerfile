FROM python:3.10-alpine

WORKDIR /home

RUN apk add \
    curl \
    gcc \
    libressl-dev \
    musl-dev \
    libffi-dev \
    postgresql-dev \
    python3-dev

# Install poetry
RUN pip install -U pip setuptools
RUN pip install poetry

# Configure Poetry
RUN poetry config virtualenvs.in-project true

# Copy dependencies configuration files
COPY poetry.lock /home/poetry.lock
COPY pyproject.toml /home/pyproject.toml

# Copy webapp
COPY webapp /home/webapp

# Install dependencies
RUN poetry install --only main

COPY entrypoint.sh /home
RUN sed -i 's/\r$//g' /home/entrypoint.sh
RUN chmod +x /home/entrypoint.sh