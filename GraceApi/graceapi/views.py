from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics


class RenderProductAPI(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductRenderSerializer


class RenderProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductRenderSerializer
    