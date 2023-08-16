from django.db import models
import random
import string

# Create your models here.
class Products(models.Model):
    CATEGORY_CHOICES=(('mobiles','Mobiles'),
                      ('cameras','Cameras'),
                      ('home_appliances','Home Appliances'),
                      ('tablets','Tablets'),
                      ('gaming','Gaming'),
                      ('smart_watches','Smart Watches')                      
                      )

    product_id = models.CharField(primary_key=True, max_length=10)
    product_name = models.CharField(max_length=50)
    description = models.TextField(max_length=150)
    price = models.DecimalField(max_digits=10 , decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    stock_quantity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now =True)

    def save(self, *args, **kwargs):
            self.product_id = "PR"+"".join(random.choices(string.digits, k=8))
            super().save(*args, **kwargs)
 


