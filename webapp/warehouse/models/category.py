import os
import uuid
from django.db import models

from utils.constants.updirs import WALLPAPERS_CATEGORIES_DIR


def wallpapers_categories(instance, filename):
    ext = filename.split(".")[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join(f"{WALLPAPERS_CATEGORIES_DIR}/", filename)


class Category(models.Model):
    name = models.CharField(max_length=50)

    url = models.SlugField(unique=True)

    short_description = models.CharField(max_length=500)

    description = models.TextField(blank=True)

    wallpaper = models.ImageField(
        blank=True, null=True, default=None, upload_to=wallpapers_categories
    )

    show_online = models.BooleanField(
        default=True, help_text="Whether to show or not this category on the website"
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name_plural = "Categories"
