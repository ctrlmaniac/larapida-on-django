from django.db import models
from .business import Business
from utils.constants import SOCIALS


class Social(models.Model):
    business = models.ForeignKey(
        Business, on_delete=models.CASCADE, related_name="socials"
    )

    social = models.CharField(max_length=10, choices=SOCIALS)

    content = models.CharField(max_length=255)
