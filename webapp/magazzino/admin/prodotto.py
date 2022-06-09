from django.contrib import admin

from ..models.prodotto import Prodotto


@admin.register(Prodotto)
class ProdottoAdmin(admin.ModelAdmin):
    pass
