FROM python:3.10-alpine

WORKDIR /home

RUN apk add curl 

RUN curl -sSL https://install.python-poetry.org | python3 -
RUN export PATH="/root/.local/bin:$PATH"

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