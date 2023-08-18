from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class UserRegistrationView(APIView):
    def post(self, request):
        User = get_user_model()
        data = request.data
        serializer = UserSerializer(data=data)  # Create a serializer for your custom user model

        if serializer.is_valid():
            user = serializer.save()
            return Response({'status': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
