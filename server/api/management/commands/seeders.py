from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
import json
from api.models import Problem, ProblemToValidate

class Command(BaseCommand):
    help = 'Crée un utilisateur normal, un administrateur de test, une série de problèmes ainsi qu\'une série de problèmes à valider'

    def handle(self, *args, **kwargs):
        User = get_user_model()

        # Créer un utilisateur
        user = User.objects.create_user(
            email='normal@example.com',
            password='password123',
            is_admin=False
        )

        # Créer un administrateur
        admin = User.objects.create_superuser(
            email='admin@go.com',
            password='admin123'
        )

        # Créer une série de problèmes
        filePathProblems = "api/management/utils/problems.json"
        with open(filePathProblems, 'r', encoding='utf-8') as file:
            problemsData = json.load(file)
            for problemData in problemsData:
                Problem.objects.create(
                    black_chip_positions=problemData['black_chip_positions'],
                    white_chip_positions=problemData['white_chip_positions'],
                    title=problemData['title'],
                    solution=problemData['solution']
                )
            
            self.stdout.write(self.style.SUCCESS('Problèmes de test créés avec succès!'))

        # Créer une série de problèmes à valider
        filePathProblemsToValidate = "api/management/utils/problems_to_validate.json"
        with open(filePathProblemsToValidate, 'r', encoding='utf-8') as file:
            problemsData = json.load(file)
            for problemData in problemsData:
                ProblemToValidate.objects.create(
                    black_chip_positions=problemData['black_chip_positions'],
                    white_chip_positions=problemData['white_chip_positions'],
                    title=problemData['title'],
                    solution=problemData['solution']
                )
            
            self.stdout.write(self.style.SUCCESS('Problèmes à valider de test créés avec succès!'))

        self.stdout.write(self.style.SUCCESS(f'Utilisateur normal créé: {user.email}'))
        self.stdout.write(self.style.SUCCESS(f'Administrateur créé: {admin.email}'))
        self.stdout.write(self.style.SUCCESS('Utilisateurs de test créés avec succès!'))


