from django.urls import include, path
from magazzino import viewsets as magazzino
from negozio import viewsets as negozio
from rest_framework import routers

from .viewsets import ContattiView

router = routers.DefaultRouter()

# Magazzino
router.register(r"magazzino/categorie", magazzino.CategoriaViewSet)
router.register(r"magazzino/prodotti", magazzino.ProdottoViewSet)
router.register(r"negozio/orari", negozio.NegozioOrariViewset)
router.register(r"negozio/orari-speciali", negozio.NegozioOrariSpecialiViewset)

urlpatterns = [
    path("contatti/", ContattiView.as_view(), name="contatti"),
    path("", include(router.urls)),
]
