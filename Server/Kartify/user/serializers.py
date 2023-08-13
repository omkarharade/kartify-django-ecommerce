from rest_framework import serializers
from .models import Buyers
import random
import string

class BuyerSerializer(serializers.ModelSerializer):
    class Meta :
        model = Buyers
        fields = "__all__"
        # fields = ('buyer_id','first_name','last_name','email', 'password', 'contact_no','address', 'created_at', 'modified_at')
        

        # def save(self, *args, **kwargs):
        #     exclude = ('buyer_id',)
        #     self.buyer_id = "BR"+"".join(random.choices(string.digits, k=8))
        #     super.save(*args, **kwargs)
            
        