from django.contrib import admin

from ..models.categoria import Categoria
from .categoria_secondaria import CategoriaSecondariaInline


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    ordering = ("nome",)
    prepopulated_fields = {"url": ("nome",)}
    inlines = [CategoriaSecondariaInline]
