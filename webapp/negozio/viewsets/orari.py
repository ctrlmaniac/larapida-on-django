from rest_framework import permissions, viewsets

from ..models import NegozioOrari
from ..serializer import NegozioOrariSerializer


class NegozioOrariViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = NegozioOrari.objects.all()
    serializer_class = NegozioOrariSerializer
