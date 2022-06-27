# larapida-on-django

La Rapida Website written in python with django

## Dependencies

Dependencies are managed with yarn and poetry.

Yarn is used to manage javascript dependencies while poetry is used to manage python dependencies.

### Install Dependencies

Before running this website you should install all dependencies.
All javascript code is already bundled and copied into the django app,
so you don't have to install all javascript dependencies while you have to install all python dependencies!

#### Poetry

If you use poetry, you have everything already prepared!
Just run `poetry install --no-dev` and all dependencies will be installed.

#### Pip

With pip you have to manually create a virtual environment and download all requirements in the **requirements.txt** file.

To instantiate a virtual environment run the following commands:

`python3 -m venv .venv`

This will create a virtual environment in the **.venv** folder

Run `source ./venv/bin/activate` to activate the virtual environment.

Then run `pip install -r requirements.txt` to install all dependencies.

## Environment

Before running this app, you have to add a file called **.larpidamolinetto** ad the root of the project.
It must contains the following variables:

```
PRODUCTION=False
DEBUG=True
SECRET_KEY=m0nwqnrq(0%r)+)t+s68_88kmn-5q#7kv2e*bm!gbkof&h_$_j
DEFAULT_FROM_EMAIL=email@example.com
EMAIL_HOST=smtp.example.com
EMAIL_HOST_USER=email@example.com
EMAIL_HOST_PASSWORD=~!p5Bf9ivO+/%/Pq5nn{9zb2PvOlb7eZ
```

The variables above are just an example of how to correclty configure di environmental variables. Those are not used in production.

## Migrate the app

Before running the app you have to instantiate a database, this app use sqlite for development purposes since it is easy to remove and reinstantiate.

If you have installed yarn I've added a script to migrate the app from the root of the project and it is `yarn migrate`.

Otherwise you have to manually cd into the **webapp** folder and run the following command: `python manage.py migrate`.

This command will create a sqlite instance of a database.

## Create a superuser

To create a superuser to manage the database via the admin interface, you have to manually cd into the **webapp** folder and then run the following command: `python manage.py createsuperuser`.

This command will create a django admin user that will let you log into the admin interface!

## Finally run the app

First of all make sure you are into the virtual environment!
`source ./venv/bin/activate` or `poetry shell`.

If you have installed yarn I've added a script that will run the app immediately. It is: `yarn runserver`.
Otherwise, you have to cd into **webapp** dir and run the following command `python manage.py runserver`.

Once you have installed the app, you should visit `/admin/` (don't forget the append slash) and create a **categoria**, then some **prodotto**.
