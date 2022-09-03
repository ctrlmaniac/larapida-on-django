from django.db import models

LUN = "1"
MAR = "2"
MER = "3"
GIO = "4"
VEN = "5"
SAB = "6"
DOM = "7"

GIORNI_DELLA_SETTIMANA = [
    (LUN, "Lunedì"),
    (MAR, "Martedì"),
    (MER, "Mercoledì"),
    (GIO, "Giovedì"),
    (VEN, "Venerdì"),
    (SAB, "Sabato"),
    (DOM, "Domenica"),
]


class NegozioOrari(models.Model):
    giorno = models.CharField(max_length=3, choices=GIORNI_DELLA_SETTIMANA)

    aperto = models.BooleanField(default=True)

    dalle = models.TimeField()

    alle = models.TimeField()

    def __str__(self):
        return (
            f"{self.get_giorno_display()} "
            + f"aperto dalle {self.dalle} alle {self.alle}"
            if self.aperto
            else "chiuso"
        )

    class Meta:
        verbose_name_plural = "Negozio Orari"
        ordering = ["giorno"]
