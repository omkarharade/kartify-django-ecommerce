from django.db import models
import string
import random
import uuid
# Create your models here.
class Orders(models.Model):
    order_id = models.CharField(primary_key=True)
    # order_id = models.UUIDField(default = uuid.uuid4, editable=False ,primary_key=True,unique=True)
    product_id = models.ForeignKey("product.Products",  on_delete=models.CASCADE)
    user_id = models.ForeignKey("customuser.CusstomUser",  on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now =True)

    def save(self, *args, **kwargs):
            self.order_id = "OR"+"".join(random.choices(string.digits, k=8))
            super().save(*args, **kwargs)




