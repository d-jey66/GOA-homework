from rest_framework import serializers
from .models import SeaLion, Fact

class SeaLionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeaLion
        fields = '__all__'

class FactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fact
        fields = '__all__'