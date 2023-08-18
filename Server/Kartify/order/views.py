from django.shortcuts import render
from .models import Orders
from product.models import Products
from user.models import Buyers
from django.core import serializers
from .serializers import OrderSerializer
from product.serializers import ProductSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
# Create your views here.

class Order(APIView):
    def post(self, request):
        try:
            product_id = request.data.get('product_id')
            buyer_id = request.data.get('buyer_id')
            quantity = request.data.get('quantity')

            data = ['product_id', 'buyer_id', 'quantity' ]
            for field  in data:
                if field not in request.data:
                    return JsonResponse({"error": "All fields are mandatory (product_id, buyer_id, quantity)"}, status=400)

            buyer = Buyers.objects.get(pk=buyer_id)
            product = Products.objects.get(pk=product_id)
            price =product.price
            total = price * quantity

            product_object = Orders.objects.create(product_id= product,
                                                    buyer_id= buyer,
                                                    quantity= quantity,
                                                    total = total
                                                    )
            return JsonResponse({"message":"Order placed.","Total Price": total})
        
        except Exception as error:
            return JsonResponse({"error": str(error)}, status= 400)


