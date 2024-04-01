from django.urls import path
from .views import *

urlpatterns = [
    path('', RenderProductAPI.as_view(), name='render_prouct'),
    path('<pk>/', RenderProductDetail.as_view(), name='render_prouct')

]