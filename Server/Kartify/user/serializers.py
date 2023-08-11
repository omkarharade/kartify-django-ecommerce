from rest_framework import serializers
from user.models import Buyers

class BuyerSerializer(serializers.ModelSerializer):
    class Meta :
        model = Buyers
        fields = "__all__"