from django.db import models

from .product import Product
from .product_attribute import ProductAttributeValue


class ProductVariant(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="variants"
    )
    attribute = models.ForeignKey(ProductAttributeValue, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.attribute.value
