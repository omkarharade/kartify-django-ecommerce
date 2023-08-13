from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Products
import json
# Create your views here.
@api_view(['POST'])
def add_product(request):
    try:
        data = request.data
        product_object = Products.objects.create(product_name= data['product_name'],description= data['description'],price= data['price'],category = data['category'],stock_quantity= data['stock_quantity'])
        return Response("Product Added",status=201)
    
    except Exception as e:
        return Response({"error": str(e)},status=400)
