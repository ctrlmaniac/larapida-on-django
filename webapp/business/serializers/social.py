from rest_framework import serializers

from ..models import Social


class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = ["social", "content"]
