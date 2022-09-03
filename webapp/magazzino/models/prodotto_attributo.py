from django.db import models


class ProdottoAttributo(models.Model):
    attributo = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.attributo

    class Meta:
        verbose_name_plural = "Prodotto Attributi"


class ProdottoAttributoValore(models.Model):
    attributo = models.ForeignKey(ProdottoAttributo, on_delete=models.CASCADE)
    valore = models.CharField(max_length=100)

    def __str__(self):
        return self.attributo.attributo + " " + self.valore

    class Meta:
        verbose_name_plural = "Prodotto Attributo Valori"
