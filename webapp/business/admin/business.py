from django.contrib import admin

from ..models import Business
from .social import SocialAdmin


@admin.register(Business)
class BusinessAdmin(admin.ModelAdmin):
    inlines = [SocialAdmin]
