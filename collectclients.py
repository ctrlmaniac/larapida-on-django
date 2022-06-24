"""This file will move all clients file into the django app."""
import json
import os
from pathlib import Path


from pathlib import Path
import shutil

BASE_DIR = Path(__file__).resolve().parent
CLIENTS_DIR = BASE_DIR / "clients"

for CLIENT in os.listdir(CLIENTS_DIR):
    CLIENT_DIR = BASE_DIR / f"clients/{CLIENT}"
    APP_DIR = BASE_DIR / f"webapp/{CLIENT}"
    BUILD_DIR = CLIENT_DIR / "build"
    TEMPLATES_DIR = APP_DIR / f"templates/{CLIENT}"
    STATIC_DIR = APP_DIR / f"static/{CLIENT}"
    INDEX_OLD = TEMPLATES_DIR / "index.html"
    INDEX_NEW = BUILD_DIR / "index.html"
    ASSET_MANIFEST = BUILD_DIR / "asset-manifest.json"

    def index():
        """Copy index.html into the template folder."""
        if os.path.exists(TEMPLATES_DIR):
            if os.path.exists(INDEX_OLD):
                os.remove(INDEX_OLD)  # Removes old index.html
        else:
            os.makedirs(TEMPLATES_DIR)

        shutil.move(INDEX_NEW, INDEX_OLD)
        print("- index.html copiato!")
        print("")

    def asset_manifest():
        """Edit asset-manifest.json."""
        print("- modifica di asset-manifest.json")

        with open(ASSET_MANIFEST, "r+") as f:
            data = json.load(f)

            # aggiorna la posizione di index.html
            data["files"]["index.html"] = "/index.html"
            f.seek(0)
            json.dump(data, f, indent=2)
            f.truncate()
        print("- asset-manifest.json modificato!")
        print("")

    def collectstatics():
        """Collect other static files."""
        print("- copia dei file")

        # Eliminazione dei vecchi file
        if os.path.isdir(STATIC_DIR):
            shutil.rmtree(STATIC_DIR)

        # Copia dei file
        shutil.move(BUILD_DIR, STATIC_DIR)

        print("- copia dei file terminata!")
        print("")

    def run():
        """run the script."""
        # Controlla che la cartella "build" esista
        if not os.path.isdir(BUILD_DIR):
            messaggio = """
            Client non costruito!\n
            Per costruirlo esegui il comando yarn run build
            """
            print(messaggio)
        else:
            # Controlla se la cartella "build" è vuota
            if not os.listdir(BUILD_DIR):
                messaggio = """
                Client non costruito!\n
                Sembra che la cartella build sia vuota!
                Sei sicuro di aver dato il comando yarn run build:www
                e che questo abbia finito?
                """
                print(messaggio)
            else:
                # Copia del file index
                index()

                # Modifica del file asset-manifest.json
                asset_manifest()

                # Sposta e rinomina la cartella build in ./static/www
                collectstatics()

    run()
