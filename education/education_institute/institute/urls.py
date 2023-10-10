from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="My homepage"),
    path('admission/', views.admission, name='Admission Form'),
    path('about/', views.about, name='about'),
]


