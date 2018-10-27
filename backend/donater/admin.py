from django.contrib import admin

# Register your models here.
from donater.models import Project, Transaction

admin.site.register(Project)
admin.site.register(Transaction)