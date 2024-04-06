from django.urls import path

from .viewsets import CarViewSet 
from .views import CarView  
from rest_framework.routers import DefaultRouter
 
router = DefaultRouter()
router.register(r'cars', CarViewSet, basename="cars")
urlpatterns = [ 
]
urlpatterns += router.urls