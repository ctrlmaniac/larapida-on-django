from django.db import models

from ..helpers.updirs import art_file_dir
from .prodotto import Prodotto


class ProdottoImmagine(models.Model):
    prodotto = models.ForeignKey(
        Prodotto, on_delete=models.CASCADE, related_name="immagini"
    )
    file = models.ImageField(upload_to=art_file_dir)

    ogimage = models.BooleanField(default=False)
    thumbnail = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Prodotto Immagini"
