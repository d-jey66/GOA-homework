from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, api_overview

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = [
    path('', api_overview, name='api-overview'),
    path('', include(router.urls)),
]