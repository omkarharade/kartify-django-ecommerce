from django.shortcuts import render
from rest_framework import viewsets
from user.models import Buyers
from user.serializers import BuyerSerializer

# Create your views here.
class BuyerViewSet(viewsets.ModelViewSet):
    queryset = Buyers.objects.all()
    serializer_class = BuyerSerializer
    
