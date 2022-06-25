from django.contrib import admin

from ..models.prodotto import Prodotto
from .prodotto_immagine import ProdottoImmagineInline


@admin.register(Prodotto)
class ProdottoAdmin(admin.ModelAdmin):
    inlines = [ProdottoImmagineInline]
