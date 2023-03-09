from rest_framework import routers
from django.urls import include, path

from business.viewsets import BusinessViewSet
from business.api_views import BusinessPrincipalApiView
from store.viewsets import StoreViewSet

router = routers.DefaultRouter()
router.register(r"business", BusinessViewSet)
router.register(r"stores", StoreViewSet)


urlpatterns = [
    path("business/principal/", BusinessPrincipalApiView.as_view()),
    path("", include(router.urls)),
]
