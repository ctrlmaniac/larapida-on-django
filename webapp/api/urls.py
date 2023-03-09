from rest_framework import routers
from django.urls import include, path

from business.viewsets import BusinessViewSet
from business.api_views import BusinessPrincipalApiView


router = routers.DefaultRouter()
router.register(r"business", BusinessViewSet)


urlpatterns = [
    path("business/principal/", BusinessPrincipalApiView.as_view()),
    path("", include(router.urls)),
]
