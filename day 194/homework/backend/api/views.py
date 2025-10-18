from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

@api_view(['GET'])
def api_overview(request):
    return Response({
        'message': 'Portfolio API',
        'endpoints': {
            'projects': '/api/projects/',
            'project_detail': '/api/projects/{id}/',
        }
    })