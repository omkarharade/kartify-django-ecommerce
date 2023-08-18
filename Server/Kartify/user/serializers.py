from rest_framework import serializers
from .models import Buyers
import random
import string

class BuyerSerializer(serializers.ModelSerializer):
    class Meta :
        model = Buyers
        fields = "__all__"
        extra_kwargs = {
               'password' : {'write_only': True}
                        }
        
    # def create(self,validated_data):
    #        password = validated_data.pop('password', None)

    
        

class LoginSerializer(serializers.Serializer):
            email = serializers.EmailField()
            password = serializers.CharField()
        