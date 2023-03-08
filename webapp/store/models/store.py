from django.db import models


class Store(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(
        max_length=255,
        help_text="The full address of the store including city, zip and country",
    )

    phone = models.CharField(max_length=10, default=None, null=True, blank=True)
    fax = models.CharField(max_length=10, default=None, null=True, blank=True)
    mobile = models.CharField(max_length=10, default=None, null=True, blank=True)
