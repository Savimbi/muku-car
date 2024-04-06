from .serializers import CarSerializer
from .models import Car
from rest_framework import viewsets


class CarViewSet(viewsets.ModelViewSet): 
    queryset = Car.objects.all()
    serializer_class = CarSerializer