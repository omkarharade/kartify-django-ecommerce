from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import Products
from rest_framework.views import APIView 
from .serializers import ProductSerializer
from math import ceil


# Create your views here.
@api_view(['POST'])
def add_product(request):
    try:
        data = ['product_name', 'description', 'price',  'category', 'stock_quantity' ]
        for field  in data:
            if field not in request.data:
                return JsonResponse({"error": "All fields are mandatory (product_name, description, quantity)"}, status=400)


        product_object = Products.objects.create(product_name= request.data['product_name'],
                                                 description= request.data['description'],
                                                 price= request.data['price'],
                                                 category = request.data['category'],
                                                 stock_quantity= request.data['stock_quantity'])
        return JsonResponse({"message" : "Product Added"},status=201)
    
    except Exception as error:
        return JsonResponse({"error": str(error)},status=400)

@api_view(['GET'])
def list_products(request, page_no):
     try:
        all_products = Products.objects.all()

        #Pagination
        page_number =page_no
        page_size = 2

        total_products = all_products.count()
        total_pages = ceil(total_products / page_size)

        #validate page number
        if page_number > total_pages :
            return JsonResponse({"error": "Invalid page number. Page does not exist."}, status=400)

        start_index = (page_number - 1) * page_size
        end_index = start_index + page_size

        products = all_products[start_index:end_index]
       
        serializer = ProductSerializer(products, many=True)
        return JsonResponse({"Products" : serializer.data, "total_pages":total_pages})
     except Exception as error:
        return JsonResponse({"error": str(error)},status=400)
 
@api_view(['GET'])
def products_by_category(request, category):
    try:
        products = Products.objects.filter(category=category).values() 

        #Check category available or not
        if not products:
            return JsonResponse({"message": "Category not available."},status=404)
        
        serialize = ProductSerializer(products, many=True)
        return JsonResponse({"Products by category": serialize.data},status=200)
    except Exception as error:
        return JsonResponse({"error": str(error)},status=500)


@api_view(['PUT'])
def update_product(request, product_id):
    try:
        product = Products.objects.get(product_id=product_id)
        #Upadate Stock quantity
        product.stock_quantity = request.data.get('stock_quantity')
        product.save()
        return JsonResponse({"message":"Stock quantity updated"})
    except Exception as error:
        return JsonResponse({"error": str(error)},status=500)


#Specific Product details    
@api_view(['GET'])
def product_details(request, product_id):
    try:
        product = Products.objects.get(product_id=product_id)
        serializer = ProductSerializer(product)
        return JsonResponse({"Product": serializer.data},status=200)
    except Exception as error:
        return JsonResponse({"error": str(error)},status=500)

