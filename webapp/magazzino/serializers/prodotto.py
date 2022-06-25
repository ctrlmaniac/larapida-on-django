from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from ..models import Prodotto, ProdottoVariante, ProdottoVarianteAttributo


class ProdottoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prodotto
        fields = "__all__"


class ProdottoVarianteAttributoSerializer(serializers.ModelSerializer):
    attributo = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = ProdottoVarianteAttributo
        fields = ["attributo"]


class ProdottoVarianteSerializer(serializers.ModelSerializer):
    attributi = ProdottoVarianteAttributoSerializer(many=True, read_only=True)

    class Meta:
        model = ProdottoVariante
        fields = "__all__"


class ProdottoPolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Prodotto: ProdottoSerializer,
        ProdottoVariante: ProdottoVarianteSerializer,
    }
