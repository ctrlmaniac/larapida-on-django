from rest_framework import viewsets, filters

from ..models import Product
from ..serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().filter(show_online=True)
    serializer_class = ProductSerializer
    filterset_fields = ["category", "show_online", "url"]
    lookup_field = "url"
