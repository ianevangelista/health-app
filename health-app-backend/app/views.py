from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from . models import Weight
from . serializers import WeightSerializer
from rest_framework.permissions import IsAuthenticated


class WeightView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Weight.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = WeightSerializer(queryset, many=True)
        return Response(serializer.data)
