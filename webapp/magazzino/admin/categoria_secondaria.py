from django.contrib import admin

from ..models.categoria_secondaria import CategoriaSecondaria


@admin.register(CategoriaSecondaria)
class CategoriaSecondariaAdmin(admin.ModelAdmin):
    ordering = ("categoria", "nome")


class CategoriaSecondariaInline(admin.StackedInline):
    model = CategoriaSecondaria
    extra = 0
