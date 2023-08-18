from django.shortcuts import render
from .models import Orders
from product.models import Products
from customuser.models import CusstomUser
from .serializers import *
from product.serializers import ProductSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
# Create your views here.

class Order(APIView):
    def post(self, request):
        try:
            serializer = OrderPlaceSerializer(data=request.data)
            if serializer.is_valid():
                product_id = request.data.get('product_id')
                buyer_id= request.data.get('buyer_id')
                quantity = request.data.get('quantity')
                print("a")
                
                # data = ['product_id', 'buyer_id', 'quantity' ]
                # for field  in data:
                #     if field not in request.data:
                #         return JsonResponse({"error": "All fields are mandatory (product_id, buyer_id, quantity)"}, status=400)
                print("b")
                buyer = CusstomUser.objects.get(pk=buyer_id)
                print(buyer)
                product = Products.objects.get(pk = product_id)
                print("d")
                price =product.price
                total = price * quantity
                print("e")
                
                product_object = Orders.objects.create(product_id= product,
                                                        user_id= buyer,
                                                        quantity= quantity,
                                                        total = total
                                                        )
                return JsonResponse({"message":"Order placed.","Total Price": total})   
            else:
                return JsonResponse({"message": serializer.errors}, status= status.HTTP_400_BAD_REQUEST)

        except Exception as error:
            return JsonResponse({"error": str(error)}, status= status.HTTP_500_INTERNAL_SERVER_ERROR)


