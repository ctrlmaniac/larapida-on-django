from rest_framework import viewsets, permissions

from ..models import Business
from ..serializers import BusinessSerializer


class BusinessViewSet(viewsets.ModelViewSet):
    """Only authenticated users will be allowed to see the full list of businesses"""

    queryset = Business.objects.all()
    serializer_class = BusinessSerializer
    permission_classes = [permissions.IsAuthenticated]
