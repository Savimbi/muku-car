from django.db import models

# Create your models here.
class Car(models.Model):  
    name = models.CharField(max_length=200,  blank=True)  
    serial_number = models.CharField(max_length=200,  blank=True)  
    brand = models.CharField(max_length=200,  blank=True)  
    c_model = models.CharField(max_length=50,  blank=True)
    category = models.CharField(max_length=50,  blank=True)
    images = models.CharField(max_length=100, blank=True)  
  
    def __str__(self):  
        return self.name 