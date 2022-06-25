from django.db import models
from django.utils.text import slugify
from polymorphic.models import PolymorphicModel
import uuid
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

    nome = models.CharField(max_length=200, blank=True, null=True)

    descrizione_breve = models.TextField(
        max_length=500, blank=True, null=True, default=None
    )
    descrizione = models.TextField(blank=True, null=True, default=None)

    url = models.CharField(max_length=500, blank=True, null=True, default=None)

    def save(self, *args, **kwargs):
        if self.url is None:
            if self.categoria is not None:
                nome = slugify(self.nome)
                url = f"{self.categoria.url}/{nome}"

                self.url = url
        super(Prodotto, self).save(*args, **kwargs)

    def __str__(self):
        return self.nome

    def get_absolute_url(self):
        return self.url

    class Meta:
        verbose_name = "Prodotto"
        verbose_name_plural = "Prodotti"
        ordering = ("nome",)
