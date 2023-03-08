from django.contrib import admin

from ..models import Store
from .social import SocialAdmin


@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    inlines = [SocialAdmin]
