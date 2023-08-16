from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView 
from .models import Buyers
from django.http import JsonResponse
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny


# Create your views here.
class BuyerViewSet(viewsets.ModelViewSet):
    queryset = Buyers.objects.all()
    serializer_class = BuyerSerializer


class RegisterUser(APIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [AllowAny]
    def post(self, request):
        try:
            
            buyer_object = Buyers.objects.create(first_name= request.data['first_name'],
                                                    last_name= request.data['last_name'],
                                                    email= request.data['email'],
                                                    password = request.data['password'],
                                                    contact_no = request.data['contact_no'],
                                                    address =request.data['address'])
            return JsonResponse({'message' : 'User registered successfully'},status=201)        
        except Exception as error:
            return JsonResponse({"error": str(error)},status=400)


class ListBuyers(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        buyers = Buyers.objects.all()
        serializer = BuyerSerializer(buyers, many=True)
        return JsonResponse({"Buyers":serializer.data})
    
class LoginUser(APIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')

            if username is None or password is None:
                return JsonResponse({"error": "Please provide both username and password"}, status=400)

            user = authenticate(request=request, username=username, password=password)
            
            if user is not None:
                return JsonResponse({"message": "Login successful"}, status=200)
            else:
                return JsonResponse({"message": "Login failed"}, status=401)
        except Exception as error:
            print(error)
            return JsonResponse({"error": str(error)},status=500)


class LoginAPI(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        buyers = Buyers.objects.all()
        serializer = BuyerSerializer(buyers, many=True)
        return Response(serializer.data)

    def post(self, request):
        try:
            data =request.data
            print("data", data)
            serializer = LoginSerializer(data = data)
            if serializer.is_valid():
                print('In serializer', serializer.data.get('email'))
                print('In serializer', serializer.data['email'])
                email= data['email']
                password = data['password']

                user = authenticate(email=email, password=password)
                print(user)
                if user is None:
                    return Response({'status':400, 
                             'message' : 'Invalid Credentials', 
                             'data': {}})

                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    })
            
            return Response({'status':400, 
                             'message' : 'Something went wrong', 
                             'data': serializer.errors})
        
        except Exception as error:
            print(error)
            return JsonResponse({"error": str(error)},status=500)


