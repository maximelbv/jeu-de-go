from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import check_password
from rest_framework import generics
from api.models import CustomUser, Positions, Tournois
from api.serializers import CustomUserSerializer, TournoisSerializer, PositionsSerializer

class Register(generics.CreateAPIView):
    serializer_class = CustomUserSerializer
class Authentification(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return Response({"error": "Adresse email ou mot de passe incorrect."}, status=status.HTTP_400_BAD_REQUEST)

        if check_password(password, user.password):
            return Response("Authentification réussie !", status=status.HTTP_200_OK)
        else:
            return Response({"error": "Adresse email ou mot de passe incorrect."}, status=status.HTTP_400_BAD_REQUEST)
class TournoisListCreateAPIView(generics.ListCreateAPIView):
    queryset = Tournois.objects.all()
    serializer_class = TournoisSerializer

class PositionsListCreateAPIView(generics.ListCreateAPIView):
    queryset = Positions.objects.all()
    serializer_class = PositionsSerializer