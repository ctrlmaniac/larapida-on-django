from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from ..models import (
    Prodotto,
    ProdottoImmagine,
    ProdottoVariante,
    ProdottoVarianteAttributo,
)


class ProdottoImmagineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProdottoImmagine
        fields = "__all__"


class ProdottoSerializer(serializers.ModelSerializer):
    immagini = ProdottoImmagineSerializer(many=True, read_only=True)

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
    immagini = ProdottoImmagineSerializer(many=True, read_only=True)

    class Meta:
        model = ProdottoVariante
        fields = "__all__"


class ProdottoPolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Prodotto: ProdottoSerializer,
        ProdottoVariante: ProdottoVarianteSerializer,
    }
