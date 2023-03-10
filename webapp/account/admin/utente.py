from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from ..forms import AccountChangeForm, AccountCreationForm
from ..models import Account


@admin.register(Account)
class AccountAdmin(UserAdmin):
    add_form = AccountCreationForm
    form = AccountChangeForm
    search_fields = ("email",)
    ordering = ("email",)
    list_display = (
        "email",
        "is_staff",
        "is_active",
    )
    list_filter = (
        "email",
        "is_staff",
        "is_active",
    )

    fieldsets = (
        (
            "Permessi",
            {
                "fields": (
                    "is_staff",
                    "is_active",
                )
            },
        ),
        (
            "Autenticazione",
            {
                "fields": (
                    "email",
                    "password",
                )
            },
        ),
        (
            "Anagrafica",
            {
                "fields": (
                    "cognome",
                    "nome",
                )
            },
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "nome",
                    "cognome",
                    "password1",
                    "password2",
                    "is_staff",
                    "is_active",
                ),
            },
        ),
    )
