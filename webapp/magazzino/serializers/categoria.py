from rest_framework import serializers

from ..models import Categoria, CategoriaSecondaria


class CategoriaSecondariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaSecondaria
        fields = "__all__"


class CategoriaSerializer(serializers.ModelSerializer):
    categorie_secondarie = CategoriaSecondariaSerializer(many=True, read_only=True)

    class Meta:
        model = Categoria
        fields = "__all__"
