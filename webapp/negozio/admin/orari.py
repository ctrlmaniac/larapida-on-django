from django.contrib import admin

from ..models import NegozioOrari, NegozioOrariSpeciali


@admin.register(NegozioOrari)
class NegozioOrariAdmin(admin.ModelAdmin):
    pass


@admin.register(NegozioOrariSpeciali)
class NegozioOrariSpecialiAdmin(admin.ModelAdmin):
    pass
