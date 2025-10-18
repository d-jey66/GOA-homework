from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SeaLionViewSet, FactViewSet, api_overview

router = DefaultRouter()
router.register(r'sealions', SeaLionViewSet)
router.register(r'facts', FactViewSet)

urlpatterns = [
    path('', api_overview),
    path('', include(router.urls)),
]