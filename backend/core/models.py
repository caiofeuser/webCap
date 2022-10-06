from email.policy import default
from django.db import models
from django.utils import timezone

class Activity(models.Model):
  title  = models.CharField(max_length=100)
  description = models.TextField()
  created_at = models.DateTimeField(default=timezone.now)
  updated_at = models.DateTimeField(default=timezone.now)
  completed = models.BooleanField(default=False)

  def __str__(self):
    return self.title

class ImcCalculation(models.Model):
  name = models.CharField(max_length=100)
  weight = models.FloatField(default=0.0)
  height = models.FloatField(default=0.0)


def __str__(self):
    return self.name