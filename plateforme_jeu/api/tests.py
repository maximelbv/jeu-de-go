from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse

class AuthenticationTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='user', password='testpassword')

    def test_login(self):
        response = self.client.post(reverse('authentification'), {'username': 'user', 'password': 'testpassword'})
        self.assertEqual(response.status_code, 302)
    def test_invalid_login(self):
        response = self.client.post(reverse('authentification'), {'username': 'wronguser', 'password': 'wrongpassword'})
        self.assertEqual(response.status_code, 200)
        
class RegistrationTest(TestCase):
    def test_registration(self):
        response = self.client.post(reverse('register'), {'username': 'newuser', 'password1': 'newpassword', 'password2': 'newpassword'})
        self.assertEqual(response.status_code, 302)
    def test_invalid_registration(self):
        response = self.client.post(reverse('register'), {'username': 'user', 'password1': 'testpassword', 'password2': 'testpassword'})
        self.assertEqual(response.status_code, 200)