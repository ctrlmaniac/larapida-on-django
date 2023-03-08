from django.db import models
from .store import Store
from utils.constants import SOCIALS


class Social(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)

    social = models.CharField(max_length=10, choices=SOCIALS)

    content = models.CharField(max_length=20)
