from django.db import models


class Business(models.Model):
    name = models.CharField(
        max_length=255,
        help_text="The full legal name of the business. Ex: La Rapida di Davide Di Criscito",
    )
    display_name = models.CharField(
        max_length=255, help_text="The name you are recognized with. Ex: La Rapida"
    )

    address = models.CharField(
        max_length=255,
        help_text="The full address of the business including city, zip and country",
    )

    phone = models.CharField(max_length=10, default=None, null=True, blank=True)
    fax = models.CharField(max_length=10, default=None, null=True, blank=True)
    mobile = models.CharField(max_length=10, default=None, null=True, blank=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name_plural = "Businesses"
