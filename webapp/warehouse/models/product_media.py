import os
import uuid
from django.db import models

from .product import Product


def products_media_dir(instance, filename):
    ext = filename.split(".")[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join("products", filename)


class ProductMedia(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="media")
    media = models.ImageField(upload_to=products_media_dir)
