from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import check_password
from rest_framework import generics
from api.models import CustomUser
from api.serializers import CustomUserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class Register(generics.CreateAPIView):
    serializer_class = CustomUserSerializer
class Authentification(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return Response({"error": "Adresse email ou mot de passe incorrect."}, status=status.HTTP_400_BAD_REQUEST)

        if check_password(password, user.password):
            serializer = self.serializer_class(data=request.data)
            try:
                serializer.is_valid(raise_exception=True)
                tokens = serializer.validated_data
                response_data = {
                    'tokens': tokens,
                    'is_admin': user.is_admin
                }
                return Response(response_data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Adresse email ou mot de passe incorrect."}, status=status.HTTP_400_BAD_REQUEST)