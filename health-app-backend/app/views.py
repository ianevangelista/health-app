from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from . models import Weight
from . serializers import WeightSerializer
from rest_framework.permissions import IsAuthenticated

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view

class WeightView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Weight.objects.all()

    #@api_view(['GET'])
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = WeightSerializer(queryset, many=True)
        return Response(serializer.data)

    #@api_view(['POST'])
    def post(self, request, *args, **kwargs):
        print(request.data)
        weight_data = request.data
        serializer = WeightSerializer(data = weight_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
