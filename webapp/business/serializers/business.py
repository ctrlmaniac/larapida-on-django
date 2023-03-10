from rest_framework import serializers

from .social import SocialSerializer
from ..models import Business


class BusinessSerializer(serializers.ModelSerializer):
    socials = SocialSerializer(many=True, read_only=True)

    class Meta:
        model = Business
        fields = "__all__"
