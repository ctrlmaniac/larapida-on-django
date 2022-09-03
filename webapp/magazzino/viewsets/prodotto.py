from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, permissions, viewsets

from ..models.prodotto import Prodotto
from ..serializers import ProdottoPolymorphicSerializer


class ProdottoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Prodotto.objects.all()
    serializer_class = ProdottoPolymorphicSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ["nome", "descrizione_breve", "descrizione"]
    filterset_fields = [
        "categoria",
        "categoria_secondaria",
        "url",
        "sito",
        "servizio",
        "categoria__url",
    ]
