from django.db import models
import string
import random
import uuid

# Create your models here.
class Payment(models.Model):
    transaction_id = models.UUIDField(default = uuid.uuid4, editable=False ,primary_key=True,unique=True)
    order_id = models.ForeignKey("order.Orders",  on_delete=models.CASCADE)
    payment_type = models.CharField(max_length=40)
    payment_status = models.CharField(max_length = 40) 
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now =True)

    # def save(self, *args, **kwargs):
    #         self.transaction_id = "TR"+"".join(random.choices(string.digits, k=8))
    #         super().save(*args, **kwargs)
