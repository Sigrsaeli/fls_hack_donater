from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Projects(models.Model):
    author_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField(max_length=255)
    description = models.TextField()
    sum = models.IntegerField()
    tags = models.TextField()
    deadline = models.DateTimeField()

class Transaction(models.Model):
    author_id = models.ForeignKey(User, on_delete=models.CASCADE)
    project_id = models.ForeignKey(Projects, on_delete=models.CASCADE)
    sum = models.IntegerField()