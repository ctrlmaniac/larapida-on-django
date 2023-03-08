from django.contrib import admin

from ..models import ProductAttribute, ProductAttributeValue


class ProductAttributeValueAdmin(admin.StackedInline):
    model = ProductAttributeValue
    extra = 1


@admin.register(ProductAttribute)
class ProductAttributeAdmin(admin.ModelAdmin):
    inlines = [ProductAttributeValueAdmin]
