from django.urls import path
from . views import WeightView

urlpatterns = [
    path('weights/', WeightView.as_view(), name="weight_view")
]