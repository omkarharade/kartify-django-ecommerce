from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Buyers
from .serializers import BuyerSerializer

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
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)   
    return Response(serializer.errors,status=400)



