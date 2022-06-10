from rest_framework import filters, permissions, viewsets

from ..models.categoria import Categoria
from ..serializers import CategoriaSerializer


class CategoriaViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["url"]
