from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import Products
from rest_framework.views import APIView 
from .serializers import *
from rest_framework import status
from math import ceil
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny


# Create your views here.
class AddProduct(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdminUser]
    def post(self, request):
        try:
            # data = ['product_name', 'description', 'price',  'category', 'stock_quantity' ]
            # for field  in data:
            #     if field not in request.data:
            #         return JsonResponse({"error": "All fields are mandatory (product_name, description, quantity)"}, status=400)

            serializer = ProductSerializer(data = request.data)

            if serializer.is_valid():
                product_object = Products.objects.create(product_name= request.data['product_name'],
                                                    description= request.data['description'],
                                                    price= request.data['price'],
                                                    category = request.data['category'],
                                                    stock_quantity= request.data['stock_quantity'])
                return JsonResponse({"message" : "Product Added"},status=status.HTTP_201_CREATED)
            else:
                return JsonResponse({"error": serializer.errors},status=status.HTTP_400_BAD_REQUEST)     
        except Exception as error:
            return JsonResponse({"error": str(error)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ListProducts(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, page_no):
        try:
            all_products = Products.objects.all()
            if all_products:
                
                #Pagination
                page_number =page_no
                page_size = 2

                total_products = all_products.count()
                total_pages = ceil(total_products / page_size)

                #validate page number
                if page_number > total_pages :
                    return JsonResponse({"error": "Invalid page number. Page does not exist."}, status=status.HTTP_404_NOT_FOUND)

                start_index = (page_number - 1) * page_size
                end_index = start_index + page_size
                                
                products = all_products[start_index:end_index]   
                serializer = AllProductSerializer(products, many=True)
                        
                return JsonResponse({"Products" : serializer.data, "total_pages":total_pages})
            else:
                return JsonResponse({"message": "Products not available"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as error:
            print(error)
            return JsonResponse({"error": str(error)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ProductsByCategory(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request, category):
        try:
            products = Products.objects.filter(category=category).values() 

            #Check category available or not
            if not products:
                return JsonResponse({"message": "Category not available."},status=status.HTTP_404_NOT_FOUND)
            
            serialize = AllProductSerializer(products, many=True)
            return JsonResponse({"Products by category": serialize.data},status=status.HTTP_200_OK)
        except Exception as error:
            return JsonResponse({"error": str(error)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)


#Upadate Stock quantity
class UpdateProductQuantity(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdminUser]
    def put(self, request, product_id):
        try:
            product = Products.objects.get(product_id=product_id)
            if product:
                serializer = UpdateProductSerializer(data=request.data)
                if serializer.is_valid():
                    product.stock_quantity = serializer.validated_data['stock_quantity']
                    product.save()
                    return JsonResponse({"message":"Stock quantity updated"})
        except Exception as error:
            return JsonResponse({"error": str(error)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)


#Specific Product details  
class ProductDetails(APIView):  
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, product_id):
        try:
            product = Products.objects.get(product_id=product_id)
            if product:
                serializer = AllProductSerializer(product)
                return JsonResponse({"Product": serializer.data},status=status.HTTP_200_OK)
            return JsonResponse({"message":"Product not found."},status= status.HTTP_404_NOT_FOUND)
        except Exception as error:
            return JsonResponse({"error": str(error)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

