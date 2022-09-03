from django.db import models

from .categoria import Categoria


class CategoriaSecondaria(models.Model):
    categoria = models.ForeignKey(
        Categoria, on_delete=models.CASCADE, related_name="categorie_secondarie"
    )

    nome = models.CharField(max_length=200)

    sito = models.BooleanField(default=True, verbose_name="Mostra sul sito")

    descrizione = models.TextField(max_length=500, blank=True, null=True, default=None)

    class Meta:
        verbose_name = "Categoria Secondaria"
        verbose_name_plural = "Categorie Secondarie"
