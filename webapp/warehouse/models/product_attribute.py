from django.db import models


class ProductAttribute(models.Model):
    attribute = models.CharField(max_length=100, blank=False)

    def __str__(self) -> str:
        return self.attribute


class ProductAttributeValue(models.Model):
    attribute = models.ForeignKey(ProductAttribute, on_delete=models.CASCADE)
    value = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.attribute.attribute + " " + self.value
