from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SeaLion, Fact
from .serializers import SeaLionSerializer, FactSerializer

class SeaLionViewSet(viewsets.ModelViewSet):
    queryset = SeaLion.objects.all()
    serializer_class = SeaLionSerializer

class FactViewSet(viewsets.ModelViewSet):
    queryset = Fact.objects.all()
    serializer_class = FactSerializer

@api_view(['GET'])
def api_overview(request):
    return Response({
        'message': 'Sea Lions API',
        'endpoints': {
            'sealions': '/api/sealions/',
            'facts': '/api/facts/',
        }
    })