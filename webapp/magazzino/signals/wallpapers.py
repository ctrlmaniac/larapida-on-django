import os

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.db.models.signals import post_delete, pre_save, post_save
from django.dispatch import receiver
from helpers import purge_empty_dirs
from PIL import Image

from ..helpers.constants import WALLPAPERS_CATEGORIA_DIR
from ..models import Categoria


@receiver(pre_save, sender=Categoria)
def wallpapers_check(sender, instance, **kwargs):
    # controlla se l'istanza è nuova o no
    try:
        categoria = Categoria.objects.get(pk=instance.pk)
    except ObjectDoesNotExist:
        # se l'istanza è nuova lascia perdere
        pass
    else:
        # se l'istanza è stata modificata
        wallpaper_old = categoria.wallpaper or None
        wallpaper_new = instance.wallpaper

        if wallpaper_old is not None:
            # Se il file viene cambiato
            if wallpaper_old != wallpaper_new:
                # elimina il vecchio file
                if os.path.isfile(wallpaper_old.path):
                    filename = wallpaper_old.path.split(".")[0]

                    os.remove(wallpaper_old.path)

                    # Elimina il thumbnail
                    if os.path.isfile(f"{filename}-thumbnail.webp"):
                        os.remove(f"{filename}-thumbnail.webp")

        # Elimina i le cartelle vuote
        purge_empty_dirs(settings.MEDIA_ROOT, removeRoot=False)


@receiver(post_delete, sender=Categoria)
def wallpapers_delete(sender, instance, **kwargs):
    if instance.wallpaper:
        file = instance.wallpaper
        if os.path.isfile(file.path):
            filename = file.path.split(".")[0]

            # Rimuove il file
            os.remove(file.path)

            # Elimina il thumbnail
            if os.path.isfile(f"{filename}-thumbnail.webp"):
                os.remove(f"{filename}-thumbnail.webp")


@receiver(post_save, sender=Categoria)
def wallpapers_thumbnail_create(sender, instance, **kwargs):
    if instance.wallpaper:
        filename = instance.wallpaper.path.split(".")[0]

        with Image.open(instance.wallpaper) as image:
            new_path = os.path.join(
                settings.MEDIA_ROOT,
                WALLPAPERS_CATEGORIA_DIR,
                f"{filename}-thumbnail.webp",
            )
            image.thumbnail((400, 400))
            image.save(new_path)
