from rest_framework import serializers
from .models import Products

class ProductSerializer(serializers.ModelSerializer):
    class Meta :
        model = Products
        fields = ['product_name', 'description', 'price',  'category', 'stock_quantity', 'created_at', 'modified_at']



class AllProductSerializer(serializers.ModelSerializer):
    class Meta :
        model = Products
        fields = "__all__"

class UpdateProductSerializer(serializers.Serializer):
    stock_quantity = serializers.IntegerField(min_value=0)

