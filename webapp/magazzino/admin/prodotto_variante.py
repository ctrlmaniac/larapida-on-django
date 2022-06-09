from django.contrib import admin
from ..models.prodotto_variante import ProdottoVariante, ProdottoVarianteAttributo


class ProdottoVarianteAttributoInline(admin.StackedInline):
    model = ProdottoVarianteAttributo
    extra = 1


@admin.register(ProdottoVariante)
class ProdottoVarianteAdmin(admin.ModelAdmin):
    inlines = [ProdottoVarianteAttributoInline]
