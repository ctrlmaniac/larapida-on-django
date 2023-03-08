from django.contrib import admin

from ..models import ProductVariant


class ProductVariantAdmin(admin.StackedInline):
    model = ProductVariant
    extra = 0
