from django.urls import include, path
from magazzino import viewsets as magazzino
from rest_framework import routers

router = routers.DefaultRouter()

# Magazzino
router.register(r"magazzino/categorie", magazzino.CategoriaViewSet)
router.register(r"magazzino/prodotti", magazzino.ProdottoViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
