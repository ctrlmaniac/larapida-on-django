from django.db import models
from .business import Business


class Social(models.Model):
    SOCIALS = [
        ("FACEBOOK", "Facebook"),
        ("INSTAGRAM", "Instagram"),
        ("TIKTOK", "TikTok"),
        ("TWITTER", "Twitter"),
        ("WHATSAPP", "Whatsapp"),
    ]

    business = models.ForeignKey(Business, on_delete=models.CASCADE)

    social = models.CharField(max_length=10, choices=SOCIALS)

    content = models.CharField(max_length=20)
