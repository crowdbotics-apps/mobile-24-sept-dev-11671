from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JHgjhgjhgjhViewSet

router = DefaultRouter()
router.register("jhgjhgjhgjh", JHgjhgjhgjhViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
