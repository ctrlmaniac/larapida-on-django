from django.contrib import admin

from ..models.prodotto_immagine import ProdottoImmagine


class ProdottoImmagineInline(admin.TabularInline):
    model = ProdottoImmagine
    extra = 0
