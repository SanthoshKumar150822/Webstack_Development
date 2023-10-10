from django.contrib import admin

# Register your models here.
from .models import Student

class StudentAdmin(admin.ModelAdmin):
    fields = [ "name", "joining_date"]

admin.site.register(Student, StudentAdmin)


