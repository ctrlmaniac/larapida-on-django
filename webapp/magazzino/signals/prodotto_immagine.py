import os

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from helpers import purge_empty_dirs

from ..models import ProdottoImmagine


@receiver(pre_save, sender=ProdottoImmagine)
def art_files_check(sender, instance, **kwargs):
    # controlla se l'istanza è nuova o no
    try:
        immagine = ProdottoImmagine.objects.get(pk=instance.pk)
    except ObjectDoesNotExist:
        # se l'istanza è nuova lascia perdere
        pass
    else:
        # se l'istanza è stata modificata
        file_old = immagine.file or None
        file_new = instance.file

        if file_old is not None:
            # Se il file viene cambiato
            if file_old != file_new:
                # elimina il vecchio file
                if os.path.isfile(file_old.path):
                    os.remove(file_old.path)

        # Elimina i le cartelle vuote
        purge_empty_dirs(settings.MEDIA_ROOT, removeRoot=False)


@receiver(post_delete, sender=ProdottoImmagine)
def art_files_delete(sender, instance, **kwargs):
    if instance.file:
        file = instance.file
        if os.path.isfile(file.path):
            # Rimuove il file
            os.remove(file.path)

    # Elimina i le cartelle vuote
    purge_empty_dirs(settings.MEDIA_ROOT, removeRoot=False)
