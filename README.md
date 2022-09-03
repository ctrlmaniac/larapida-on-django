# La Rapida

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Imports: isort](https://img.shields.io/badge/%20imports-isort-%231674b1?style=flat&labelColor=ef8336)](https://pycqa.github.io/isort/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docker](https://img.shields.io/docker/automated/ctrlmaniac/larapida)](https://hub.docker.com/repository/docker/ctrlmaniac/larapida)

**La Rapida di Davide Di Criscito**'s website is written in python with django, and javascript with react!

## Want to try in your local machine?

You can download the [docker-compose.yml](./docker-compose.yml) file in a directory of your choice and then run `docker compose up -d` to install the docker image and run the containers!

### Before running docker

Be sure to have a `.env` file in the root!

This `.env` file needs to have the following secrets:

```
SECRET_KEY=

DEBUG=1
PRODUCTION=0

DEFAULT_FROM_EMAIL=
EMAIL_HOST=
EMAIL_HOST_USER=
EMAIL_HOST_PASSWORD=

DB_NAME=
DB_USER=
DB_PASSWORD=
```

Be sure to fill all secrets! These secrets will be used as environment variables inside the docker container!
