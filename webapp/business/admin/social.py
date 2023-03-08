from django.contrib import admin

from ..models import Social


class SocialAdmin(admin.TabularInline):
    model = Social
    extra = 0
