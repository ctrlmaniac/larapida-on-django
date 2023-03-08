import os

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.db.models.signals import post_delete, pre_save, post_save
from django.dispatch import receiver
from utils.helpers import purge_empty_dirs
from utils.constants import WALLPAPERS_CATEGORIES_DIR

from ..models import Category


@receiver(pre_save, sender=Category)
def wallpapers_check(sender, instance, **kwargs):
    # controlla se l'istanza è nuova o no
    try:
        category = Category.objects.get(pk=instance.pk)
    except ObjectDoesNotExist:
        # se l'istanza è nuova lascia perdere
        pass
    else:
        # se l'istanza è stata modificata
        wallpaper_old = category.wallpaper or None
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


@receiver(post_delete, sender=Category)
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
