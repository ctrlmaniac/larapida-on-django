from rest_framework import serializers

from .category import ShortCategorySerializer
from ..models import ProductAttributeValue, ProductVariant, ProductMedia, Product


class ProductAttributeSerializer(serializers.ModelSerializer):
    attribute = serializers.StringRelatedField(many=False, read_only=True)

    class Meta:
        model = ProductAttributeValue
        fields = ["attribute", "value"]


class ProductVariantSerialzer(serializers.ModelSerializer):
    attribute = ProductAttributeSerializer(many=False, read_only=True)

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
        lookup_field = "url"
