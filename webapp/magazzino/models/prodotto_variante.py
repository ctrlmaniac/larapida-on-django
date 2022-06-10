from django.db import models
from .prodotto import Prodotto
from .prodotto_attributo import ProdottoAttributoValore


class ProdottoVariante(Prodotto):
    prodotto = models.ForeignKey(
        Prodotto, on_delete=models.CASCADE, related_name="prodotti"
    )

    class Meta:
        verbose_name_plural = "Prodotto Varianti"


class ProdottoVarianteAttributo(models.Model):
    variante = models.ForeignKey(
        ProdottoVariante, on_delete=models.CASCADE, related_name="attributi"
    )
    attributo = models.ForeignKey(ProdottoAttributoValore, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Prodotto Variante Attributi"
