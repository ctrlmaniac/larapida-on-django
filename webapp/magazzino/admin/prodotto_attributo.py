from django.contrib import admin

from ..models.prodotto_attributo import ProdottoAttributo, ProdottoAttributoValore


class ProdottoAttributoValoreInline(admin.StackedInline):
    model = ProdottoAttributoValore
    extra = 1


@admin.register(ProdottoAttributo)
class ProdottoAttributoAdmin(admin.ModelAdmin):
    inlines = [ProdottoAttributoValoreInline]
