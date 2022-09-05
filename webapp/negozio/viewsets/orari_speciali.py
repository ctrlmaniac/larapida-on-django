from datetime import datetime

from rest_framework import permissions, viewsets

from ..models import NegozioOrariSpeciali
from ..serializer import NegozioOrariSpecialiSerializer


class NegozioOrariSpecialiViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = NegozioOrariSpeciali.objects.filter(giorno__gte=datetime.today())
    serializer_class = NegozioOrariSpecialiSerializer
