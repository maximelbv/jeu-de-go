from django.test import TestCase
from api.models import Problem
from api.serializers import ProblemSerializer

class ProblemTests(TestCase):
    
    def setUp(self):
        self.problem1_data = {
            'title': 'Problem 1',
            'black_chip_positions': [(0, 0), (1, 1)],
            'white_chip_positions': [(2, 2), (3, 3)],
            'solution': 'Solution 1'
        }
        self.serializer = ProblemSerializer(data=self.problem1_data)
        if self.serializer.is_valid():
            self.problem1 = self.serializer.save()
        else:
            raise ValueError("Serializer data invalid")
    
    def test_create_valid_problem(self):
        self.assertEqual(self.problem1.title, 'Problem 1')
        self.assertEqual(self.problem1.black_chip_positions, [(0, 0), (1, 1)])
        self.assertEqual(self.problem1.white_chip_positions, [(2, 2), (3, 3)])
        self.assertEqual(self.problem1.solution, 'Solution 1')
    
    def test_retrieve_problem(self):
        retrieved_problem = Problem.objects.get(title='Problem 1')
        self.assertEqual(retrieved_problem.title, 'Problem 1')
    
    def test_update_problem(self):
        update_data = {
            'title': 'Updated Problem',
            'black_chip_positions': [(0, 0)],
            'white_chip_positions': [(2, 2)],
            'solution': 'Updated Solution'
        }
        serializer = ProblemSerializer(instance=self.problem1, data=update_data, partial=True)
        if serializer.is_valid():
            updated_problem = serializer.save()
        else:
            raise ValueError("Serializer data invalid")
        
        self.assertEqual(updated_problem.title, 'Updated Problem')
        self.assertEqual(updated_problem.black_chip_positions, [(0, 0)])
        self.assertEqual(updated_problem.white_chip_positions, [(2, 2)])
        self.assertEqual(updated_problem.solution, 'Updated Solution')
    
    def test_delete_problem(self):
        problem_count_before_delete = Problem.objects.count()
        self.problem1.delete()
        problem_count_after_delete = Problem.objects.count()
        self.assertEqual(problem_count_after_delete, problem_count_before_delete - 1)
