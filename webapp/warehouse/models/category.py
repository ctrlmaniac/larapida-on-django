from django.db import models

from utils.updirs import wallpapers_category


class Category(models.Model):
    name = models.CharField(max_length=50)

    url = models.SlugField(unique=True)

    short_description = models.CharField(max_length=500)

    description = models.TextField(blank=True)

    wallpaper = models.ImageField(blank=True, upload_to=wallpapers_category)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name_plural = "Categories"
