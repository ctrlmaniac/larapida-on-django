from django.contrib import admin

from .product_media import ProductMediaAdmin
from .product_variant import ProductVariantAdmin
from ..models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {"url": ("name",)}
    inlines = [ProductMediaAdmin, ProductVariantAdmin]
