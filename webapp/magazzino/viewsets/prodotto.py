from rest_framework import filters, permissions, viewsets

from ..models.prodotto import Prodotto
from ..serializers import ProdottoPolymorphicSerializer


class ProdottoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Prodotto.objects.all()
    serializer_class = ProdottoPolymorphicSerializer
    filter_backends = [filters.SearchFilter]
