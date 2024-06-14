from rest_framework import generics, status
from rest_framework.response import Response
from api.models import Problem, ProblemToValidate
from api.serializers import ProblemSerializer, ProblemToValidateSerializer

class ProblemListCreate(generics.ListCreateAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer

class ProblemRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=kwargs.pop('partial', False))
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        self.log_message(f"Problem updated successfully.")

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)

        self.log_message(f"Problem deleted successfully.")

        return Response(status=status.HTTP_204_NO_CONTENT)

    def log_message(self, message):
        print(message)

class ProblemToValidateListCreate(generics.ListCreateAPIView):
    queryset = ProblemToValidate.objects.all()
    serializer_class = ProblemToValidateSerializer

class ProblemToValidateRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProblemToValidate.objects.all()
    serializer_class = ProblemToValidateSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=kwargs.pop('partial', False))
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        self.log_message(f"Problem to validate updated successfully.")

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)

        self.log_message(f"Problem to validate deleted successfully.")

        return Response(status=status.HTTP_204_NO_CONTENT)

    def log_message(self, message):
        print(message)
