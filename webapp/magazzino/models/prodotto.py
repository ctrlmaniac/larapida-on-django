from django.db import models
from polymorphic.models import PolymorphicModel


class Prodotto(PolymorphicModel):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name_plural = "Prodotti"
