from rest_framework import viewsets, permissions

from ..models import Category
from ..serializers import CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_queryset(self):
        if self.request.user.is_authenticated:
            queryset = Category.objects.all()
        else:
            queryset = Category.objects.all().filter(show_online=True)
        return queryset
