from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from unittest.mock import patch
from api.models import Tournois, Positions  # Importez vos modèles
from api.serializers import TournoisSerializerAll  # Importez votre serializer de tournois

class TournoisListTests(APITestCase):
    def setUp(self):
        self.url = reverse('tournaments-list')

    @patch('api.serializers.TournoisSerializerAll')
    def test_create_tournament_with_mock(self, MockTournoisSerializer):
        # Création de données fictives pour le tournoi
        mock_tournament_data = {
            'event': 'Nouvel événement',
            'round': '1',
            'black_player': 'Joueur Noir',
            'black_rank': '1d',
            'white_player': 'Joueur Blanc',
            'white_rank': '1k',
            'komi': 6.5,
            'result': 'B+Resign',
            'date': '2024-07-09'
        }
        
        # Création d'une instance de mock serializer
        serializer_instance = MockTournoisSerializer.return_value
        serializer_instance.is_valid.return_value = True
        serializer_instance.save.return_value = Tournois(**mock_tournament_data)

        # Appel à l'API pour créer le tournoi avec les données fictives
        response = self.client.post(self.url, mock_tournament_data, format='json')

        # Vérification des résultats attendus
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Tournois.objects.count(), 1)
