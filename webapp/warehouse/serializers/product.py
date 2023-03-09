from rest_framework import serializers

from .category import ShortCategorySerializer
from ..models import ProductVariant, ProductMedia, Product


class ProductVariantSerialzer(serializers.ModelSerializer):
    attribute = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = ProductVariant
        fields = ["attribute"]


class ProductMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductMedia
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    media = ProductMediaSerializer(many=True, read_only=True)
    variants = ProductVariantSerialzer(many=True, read_only=True)
    category = ShortCategorySerializer(many=False, read_only=True)

    class Meta:
        model = Product
        fields = "__all__"
