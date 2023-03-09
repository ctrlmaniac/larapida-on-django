from rest_framework import routers
from django.urls import include, path

from business.viewsets import BusinessViewSet
from business.api_views import BusinessPrincipalApiView
from store.viewsets import StoreViewSet
from warehouse import viewsets as warehouse

router = routers.DefaultRouter()
router.register(r"business", BusinessViewSet)
router.register(r"stores", StoreViewSet)
router.register(r"categories", warehouse.CategoryViewSet)
router.register(r"products", warehouse.ProductViewSet)


urlpatterns = [
    path("business/principal/", BusinessPrincipalApiView.as_view()),
    path("", include(router.urls)),
]
