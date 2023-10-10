from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'institute/home.html')

def about(request):
    return render(request, 'institute/about.html')

def admission(request):
    return render(request, 'institute/admission.html')






