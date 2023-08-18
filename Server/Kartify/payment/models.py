from django.db import models
import string
import random

# Create your models here.
class Payment(models.Model):
    transaction_id = models.CharField(primary_key=True, max_length=10)
    order_id = models.ForeignKey("order.Orders",  on_delete=models.CASCADE)
    
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now =True)

    def save(self, *args, **kwargs):
            self.transaction_id = "TR"+"".join(random.choices(string.digits, k=8))
            super().save(*args, **kwargs)
