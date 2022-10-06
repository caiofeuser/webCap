from rest_framework import serializers
from .models import Activity
from .models import ImcCalculation

class ActivitySerializer(serializers.ModelSerializer):
  class Meta:
    model = Activity
    fields = '__all__'

class ImcSerializer(serializers.ModelSerializer):
  class Meta:
    model = ImcCalculation
    fields = '__all__'