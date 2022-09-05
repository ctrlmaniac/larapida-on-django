from django.apps import AppConfig


class MagazzinoConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "magazzino"

    def ready(self):
        from .signals import (
            art_files_check,
            art_files_delete,
            wallpapers_check,
            wallpapers_delete,
            wallpapers_thumbnail_create,
        )
