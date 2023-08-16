from rest_framework import serializers
from .models import Buyers
import random
import string

class BuyerSerializer(serializers.ModelSerializer):
    class Meta :
        model = Buyers
        fields = "__all__"
        

class LoginSerializer(serializers.Serializer):
            email = serializers.EmailField()
            password = serializers.CharField()
        