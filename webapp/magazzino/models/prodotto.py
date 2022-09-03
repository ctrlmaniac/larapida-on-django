import uuid

from django.db import models
from django.utils.text import slugify
from polymorphic.models import PolymorphicModel

from .categoria import Categoria
from .categoria_secondaria import CategoriaSecondaria


class Prodotto(PolymorphicModel):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        default=None,
    )

    categoria_secondaria = models.ForeignKey(
        CategoriaSecondaria,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        default=None,
    )

    sito = models.BooleanField(default=True, help_text="mostra sul sito")
    shop = models.BooleanField(default=True, help_text="mostra sullo shop")

    nome = models.CharField(max_length=200, blank=False, null=False)

    descrizione_breve = models.TextField(
        max_length=500, blank=True, null=True, default=None
    )
    descrizione = models.TextField(blank=True, null=True, default=None)

    url = models.SlugField(unique=True)

    prezzo = models.DecimalField(
        max_digits=19,
        decimal_places=2,
        blank=True,
        default=None,
        null=True,
    )

    prezzo_offerta = models.DecimalField(
        max_digits=19,
        decimal_places=2,
        blank=True,
        default=None,
        null=True,
    )

    prezzo_a_partire = models.BooleanField(default=False)

    servizio = models.BooleanField(
        default=False, help_text="Questo prodotto è un servizio"
    )

    def __str__(self):
        return self.nome

    def get_absolute_url(self):
        return self.url

    class Meta:
        verbose_name = "Prodotto"
        verbose_name_plural = "Prodotti"
        ordering = ("nome",)
