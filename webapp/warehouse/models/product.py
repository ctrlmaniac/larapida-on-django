from django.db import models

from .category import Category


class Product(models.Model):
    category = models.ForeignKey(
        Category, default=None, blank=True, null=True, on_delete=models.SET_NULL
    )

    name = models.CharField(max_length=255)

    url = models.SlugField(unique=True)

    short_description = models.CharField(max_length=500)

    description = models.TextField(blank=True, null=True, default=None)

    price_start_at = models.BooleanField(
        default=False,
        help_text="Whether the price start at a fixed amount but can vary",
    )
    price = models.DecimalField(
        max_digits=19, decimal_places=2, blank=True, default=None, null=True
    )
    price_offer = models.DecimalField(
        max_digits=19, decimal_places=2, blank=True, default=None, null=True
    )

    service = models.BooleanField(
        default=False, help_text="Whether this product is a service or not"
    )

    show_online = models.BooleanField(
        default=True, help_text="Whether to show or not this product on the website"
    )

    def __str__(self):
        return self.name
