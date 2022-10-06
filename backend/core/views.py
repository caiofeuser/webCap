from django.http import JsonResponse
from rest_framework import viewsets
from .models import Activity, ImcCalculation
from .serializers import ActivitySerializer, ImcSerializer
from rest_framework.views import APIView
from .calculations import calculate


class ActivityView(viewsets.ModelViewSet):
  queryset = Activity.objects.all()
  serializer_class = ActivitySerializer

class ImcView(viewsets.ModelViewSet):
  queryset = ImcCalculation.objects.all()
  serializer_class = ImcSerializer

class CalculateImcView(APIView):
  def post(self, request):
    data = request.data
    output = calculate(data)

    return JsonResponse(output)