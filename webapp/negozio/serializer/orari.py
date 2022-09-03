from rest_framework import serializers

from ..models import NegozioOrari


class NegozioOrariSerializer(serializers.ModelSerializer):
    class Meta:
        model = NegozioOrari
        fields = "__all__"
