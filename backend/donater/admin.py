from django.contrib import admin

# Register your models here.
from donater.models import Projects, Transaction

admin.site.register(Projects)
admin.site.register(Transaction)