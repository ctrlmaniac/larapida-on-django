from django.urls import include, path
from rest_framework import routers

from magazzino import viewsets as magazzino

router = routers.DefaultRouter()

# Magazzino
router.register(r"magazzino/categorie", magazzino.CategoriaViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
