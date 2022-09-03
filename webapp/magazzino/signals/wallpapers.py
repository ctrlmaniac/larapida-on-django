import os

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from helpers import purge_empty_dirs

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
                    os.remove(wallpaper_old.path)

        # Elimina i le cartelle vuote
        purge_empty_dirs(settings.MEDIA_ROOT, removeRoot=False)


@receiver(post_delete, sender=Categoria)
def wallpapers_delete(sender, instance, **kwargs):
    if instance.wallpaper:
        file = instance.wallpaper
        if os.path.isfile(file.path):
            # Rimuove il file
            os.remove(file.path)
