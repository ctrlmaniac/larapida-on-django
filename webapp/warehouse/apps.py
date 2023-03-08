from django.apps import AppConfig


class WarehouseConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "warehouse"

    def ready(self) -> None:
        from .signals import (
            wallpapers_delete,
            wallpapers_categories,
            product_files_delete,
            product_files_check,
        )
