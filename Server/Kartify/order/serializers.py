from rest_framework import serializers
from .models import Orders

class OrderPlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ['product_id', 'buyer_id', 'quantity']
