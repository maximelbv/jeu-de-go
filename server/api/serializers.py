from rest_framework import serializers
from .models import CustomUser, Tournois, Positions

class TournoisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournois
        fields = '__all__'

class PositionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Positions
        fields = '__all__'

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    is_admin = serializers.BooleanField(required=False)

    class Meta:
        model = CustomUser
        fields = ('email', 'password', 'password2', 'is_admin')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError("Les mots de passe ne correspondent pas.")
        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password2')
        is_admin = validated_data.pop('is_admin', False)

        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            password=password,
            is_admin=is_admin
        )
        return user
