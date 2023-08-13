from django.db import models

# Create your models here.
class Orders(models.Model):
    order_id = models.CharField(primary_key=True, max_length=10)
    product_id = models.ForeignKey("product.Products",  on_delete=models.CASCADE)
    buyer_id = models.ForeignKey("user.Buyers",  on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now =True)




