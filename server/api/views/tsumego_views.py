
from rest_framework.response import Response
from rest_framework import generics
from api.models import Positions, Tournois
from api.serializers import TournoisSerializerAll, PositionsSerializerAll, TournoisSerializerOne

class TournoisList(generics.ListCreateAPIView):
    queryset = Tournois.objects.all()
    serializer_class = TournoisSerializerAll

class PositionsList(generics.ListCreateAPIView):
    queryset = Positions.objects.all()
    serializer_class = PositionsSerializerAll

class TournoisDetailWithPositions(generics.RetrieveAPIView):
    queryset = Tournois.objects.all()
    serializer_class = TournoisSerializerOne
    lookup_field = 'id'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        positions = Positions.objects.filter(tournois_id=instance.id)
        positions_serializer = PositionsSerializerAll(positions, many=True)
        
        return Response({
            'tournois_details': serializer.data,
            'positions_related_to_tournois': positions_serializer.data
        })