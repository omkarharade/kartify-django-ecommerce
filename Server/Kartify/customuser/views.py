from rest_framework.views import APIView 
from .models import CusstomUser
from django.http import JsonResponse
from rest_framework import status
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny


class RegisterUser(APIView):
    def post(self, request):
        try:
            serializer = CustomUserSerializer(data = request.data)

            if serializer.is_valid():
                user = serializer.save()
                return JsonResponse({'message' : 'User registered successfully'},status=status.HTTP_201_CREATED) 
            else:
                return JsonResponse({"error": serializer.errors},status=status.HTTP_400_BAD_REQUEST)     
        except Exception as error:
            return JsonResponse({"error": str(error)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ListBuyers(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdminUser]
    def get(self, request):
        try:
            buyers = CusstomUser.objects.all()
            serializer = CustomUserSerializer(buyers, many=True)
            return JsonResponse({"Buyers":serializer.data},status= status.HTTP_200_OK)
        except Exception as error:
            return JsonResponse({"error": str(error)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class LoginUser(APIView):
    def post(self, request):
        try:            
            serializer = LoginSerializer(data = request.data)
                        
            if serializer.is_valid():
                email = serializer.validated_data.get('email')
                password = serializer.validated_data.get('password') 

                                      
                user = authenticate(request=request, username=email, password=password)
                
                if user is not None:
                    # access= AccessToken.for_user(user)
                    refresh = RefreshToken.for_user(user)
                    return JsonResponse({"refresh": str(refresh),
                                        "access": str(refresh.access_token),
                                        "message": "Login successful", 
                                        }, status=status.HTTP_200_OK)
                else:
                    return JsonResponse({"message": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)
            return JsonResponse({"message": serializer.errors},status=status.HTTP_400_BAD_REQUEST)
       
        except Exception as error:
            print(error)
            return JsonResponse({"error": str(error)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

