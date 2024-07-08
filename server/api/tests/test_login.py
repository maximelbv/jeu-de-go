from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from api.models import CustomUser


class AuthenticationTest(APITestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(
            email='user@example.com', 
            password='testpassword'
        )

    def test_login(self):
        url = reverse('login')
        data = {'email': 'user@example.com', 'password': 'testpassword'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('tokens', response.data)
        self.assertIn('is_admin', response.data)

    def test_invalid_login(self):
        url = reverse('login')
        data = {'email': 'wronguser@example.com', 'password': 'wrongpassword'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('error', response.data)

class RegistrationTest(APITestCase):
    def setUp(self):
        self.existing_user = CustomUser.objects.create_user(
            email='user@example.com', 
            password='testpassword'
        )

    def test_registration(self):
        url = reverse('register')
        data = {
            'email': 'newuser@example.com',
            'password': 'newpassword',
            'password2': 'newpassword'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_invalid_registration(self):
        url = reverse('register')
        data = {
            'email': 'user@example.com',
            'password': 'testpassword',
            'password2': 'testpassword'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('email', response.data)  # Vérifie l'erreur pour le champ 'email'

