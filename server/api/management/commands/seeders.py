from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Crée un utilisateur normal et un administrateur de test'

    def handle(self, *args, **kwargs):
        User = get_user_model()

        # Créer un utilisateur
        user = User.objects.create_user(
            email='normal@example.com',
            password=make_password('password123'),
            is_admin=False
        )

        # Créer un administrateur
        admin = User.objects.create_superuser(
            email='admin@go.com',
            password=make_password('admin123')
        )

        self.stdout.write(self.style.SUCCESS(f'Utilisateur normal créé: {user.email}'))
        self.stdout.write(self.style.SUCCESS(f'Administrateur créé: {admin.email}'))
        self.stdout.write(self.style.SUCCESS('Utilisateurs de test créés avec succès!'))
