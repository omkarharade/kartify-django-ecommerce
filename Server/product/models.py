from django.db import models

# Create your models here.
class Products(models.Model):
    product_id = models.CharField(primary_key=True, max_length=10)
    product_name = models.CharField(max_length=50)
    description = models.TextField(max_length=150)
    price = models.DecimalField(max_digits=10 , decimal_places=2)
    category = models.CharField(max_length=50)
    stock_quantity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now =True)


