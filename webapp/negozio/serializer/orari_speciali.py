from rest_framework import serializers

from ..models import NegozioOrariSpeciali


class NegozioOrariSpecialiSerializer(serializers.ModelSerializer):
    class Meta:
        model = NegozioOrariSpeciali
        fields = "__all__"
