from django.test import TestCase
from api.models import ProblemToValidate
from api.serializers import ProblemToValidateSerializer

class ProblemToValidateTests(TestCase):
    
    def setUp(self):
        self.problem_to_validate1_data = {
            'title': 'ProblemToValidate 1',
            'black_chip_positions': [(0, 0), (1, 1)],
            'white_chip_positions': [(2, 2), (3, 3)],
            'solution': 'Solution 1'
        }
        self.serializer = ProblemToValidateSerializer(data=self.problem_to_validate1_data)
        if self.serializer.is_valid():
            self.problem_to_validate1 = self.serializer.save()
        else:
            raise ValueError("Serializer data invalid")
    
    def test_create_valid_problem_to_validate(self):
        self.assertEqual(self.problem_to_validate1.title, 'ProblemToValidate 1')
        self.assertEqual(self.problem_to_validate1.black_chip_positions, [(0, 0), (1, 1)])
        self.assertEqual(self.problem_to_validate1.white_chip_positions, [(2, 2), (3, 3)])
        self.assertEqual(self.problem_to_validate1.solution, 'Solution 1')
    
    def test_retrieve_problem_to_validate(self):
        retrieved_problem = ProblemToValidate.objects.get(title='ProblemToValidate 1')
        self.assertEqual(retrieved_problem.title, 'ProblemToValidate 1')
    
    def test_update_problem_to_validate(self):
        update_data = {
            'title': 'Updated ProblemToValidate',
            'black_chip_positions': [(0, 0)],
            'white_chip_positions': [(2, 2)],
            'solution': 'Updated Solution'
        }
        serializer = ProblemToValidateSerializer(instance=self.problem_to_validate1, data=update_data, partial=True)
        if serializer.is_valid():
            updated_problem = serializer.save()
        else:
            raise ValueError("Serializer data invalid")
        
        self.assertEqual(updated_problem.title, 'Updated ProblemToValidate')
        self.assertEqual(updated_problem.black_chip_positions, [(0, 0)])
        self.assertEqual(updated_problem.white_chip_positions, [(2, 2)])
        self.assertEqual(updated_problem.solution, 'Updated Solution')
    
    def test_delete_problem_to_validate(self):
        problem_count_before_delete = ProblemToValidate.objects.count()
        self.problem_to_validate1.delete()
        problem_count_after_delete = ProblemToValidate.objects.count()
        self.assertEqual(problem_count_after_delete, problem_count_before_delete - 1)
