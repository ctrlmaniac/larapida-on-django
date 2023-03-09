from rest_framework import generics

from ..models import Business
from ..serializers import BusinessSerializer


class BusinessPrincipalApiView(generics.RetrieveAPIView):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer

    def get_object(self):
        return self.queryset.first()
