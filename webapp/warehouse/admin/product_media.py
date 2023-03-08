from django.contrib import admin

from ..models import ProductMedia


class ProductMediaAdmin(admin.TabularInline):
    model = ProductMedia
    extra = 0
