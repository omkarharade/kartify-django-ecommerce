from django.db import models

# Create your models here.

class Buyers(models.Model):
    buyer_id = models.CharField(primary_key=True , max_length=10, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=10)
    contact_no = models.CharField(max_length=10)
    address = models.TextField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now =True)
    

