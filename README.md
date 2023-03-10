# La Rapida

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Imports: isort](https://img.shields.io/badge/%20imports-isort-%231674b1?style=flat&labelColor=ef8336)](https://pycqa.github.io/isort/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docker](https://img.shields.io/docker/automated/ctrlmaniac/larapida)](https://hub.docker.com/repository/docker/ctrlmaniac/larapida)

**La Rapida di Davide Di Criscito**'s website is written in python with django, and typescript with react!

## Want to try in your local machine?

You have two options, the first is with **docker** the second is by downloading the entire project on your local machine!

### First of all

Create a directory or download the repository and create a file called `.env`.

Put the following variables inside this file:

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

### Run larapida locally

Download the repository and install the dependencies!

This project is managed with [poetry](https://python-poetry.org/docs/).

Install poetry by following the instruction in the link provided above.

Set poetry virtualenvs to be created inside the projects:

`poetry config virtualenvs.in-project true`

Now you're ready to install all python dependencies by running the following command `poetry install`!

When all dependencies are installed, you can run `poetry shell` to activate the environment.

To run the project run this commands first:

```
python webapp/manange.py migrate --settings=webapp.development

python webapp/manage.py collectstatic --no-input --clear --settings=webapp.development
```

Now you have to create a superuser!

`python webapp/manage.py createsuperuser --settigns=webapp.development`

### Run larapida with Docker

You can download the [docker-compose.yml](./docker-compose.yml) file in a directory of your choice and then run `docker compose up -d` to install the docker image and run the containers! Be sure to create a `.env` file inside the directory as mentioned above!

Create a superuser:

`docker exec -it larapida-webapp .venv/bin/python webapp/manage.py createsuperuser`

Then you're ready to go!

## Troubleshooting

If you have problems logging into the admin site that's because django forgot to give admin privileges to your user. To give admin privileges to the user you've created open the django shell and follow these commands:

To open a django shell you need to run this command:

If you've downloaded the project:
`poetry run python webapp/manage.py shell --settings=development`

If you're using docker:
`docker exec -it larapida-webapp .venv/bin/python webapp/manage.py shell`

and then:

```
from account.models import Account

user = Account.objects.get(email="youremail@example.com")

user.is_admin = True

user.save()
```

Now you should be allowed to log into the admin site!
