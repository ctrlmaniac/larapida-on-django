from django.db import models


class NegozioOrariSpeciali(models.Model):
    giorno = models.DateField(blank=False)

    aperto = models.BooleanField(default=False)

    dalle = models.TimeField(blank=True, null=True)

    alle = models.TimeField(blank=True, null=True)

    def __str__(self):
        return (
            f"{self.giorno} aperto dalle {self.dalle} alle {self.alle}"
            if self.aperto
            else f"{self.giorno} chiuso"
        )

    class Meta:
        verbose_name_plural = "Negozio Orari Speciali"
        ordering = ["giorno"]
