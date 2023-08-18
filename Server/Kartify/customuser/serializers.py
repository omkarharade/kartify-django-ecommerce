from rest_framework import serializers
from .models import CusstomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta :
        model = CusstomUser
        fields = ['email','password','first_name', 'last_name', 'contact_no', 'address','created_at','modified_at']
        extra_kwargs = {
               'password' : {'write_only': True}
                        }
    
    def create(self, validated_data):
        user = CusstomUser(username = validated_data['email'],
                           email = validated_data['email'],
                           first_name = validated_data['first_name'],
                           last_name = validated_data['last_name'],
                           contact_no = validated_data['contact_no'],
                           address = validated_data['address'],
                        #    created_at = validated_data['created_at'],
                        #    modified_at = validated_data['modified_at']
                           )
        user.set_password(validated_data['password'])
        user.save()
        return user
        
        

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
        