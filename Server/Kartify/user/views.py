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
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken


# Create your views here.
class BuyerViewSet(viewsets.ModelViewSet):
    queryset = Buyers.objects.all()
    serializer_class = BuyerSerializer
    

@api_view(['GET'])
def list_buyers(request):
    buyers = Buyers.objects.all()
    serializer = BuyerSerializer(buyers, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def add_buyer(request):
    serializer = BuyerSerializer(data=request.data)
    print("serializer")
    if serializer.is_valid():
        serializer.save()
        # user = Buyers.objects.get(email = serializer.data['email'])
        # refresh = RefreshToken.for_user(user)
        return JsonResponse({})

        # return JsonResponse({'status' :201 ,'payload' : serializer.data,  'refresh': str(refresh),
        #             'access': str(refresh.access_token), 'message' : 'User registered successfully'})   
    return Response(serializer.errors,status=400)



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


