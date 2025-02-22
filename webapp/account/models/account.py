from django.contrib.auth.models import AbstractUser
from django.core.validators import MinLengthValidator
from django.db import models

from ..managers import AccountManager


class Account(AbstractUser):
    objects = AccountManager()

    username = None
    first_name = None
    last_name = None

    email = models.EmailField(unique=True)

    nome = models.CharField(
        max_length=60,
        validators=[MinLengthValidator(1)],
    )

    cognome = models.CharField(
        max_length=60,
        validators=[MinLengthValidator(1)],
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "Account"
        verbose_name_plural = "Utenti"
