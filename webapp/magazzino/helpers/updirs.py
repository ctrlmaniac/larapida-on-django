import os
import uuid

from .constants import WALLPAPERS_CATEGORIA_DIR


def wallpapers_dir(instance, filename):
    ext = filename.split(".")[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join(f"{WALLPAPERS_CATEGORIA_DIR}/", filename)
