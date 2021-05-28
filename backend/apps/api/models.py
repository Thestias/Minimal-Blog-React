from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Blog(models.Model):
    author = models.ForeignKey(to=User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    body = models.TextField()
    synopsis = models.CharField(max_length=300)
    creation_time = models.DateField(auto_now_add=True)
    categories = models.ManyToManyField("Category", default="Programming")

    def __str__(self):
        return self.title + " - Author: " + str(self.author) + " - Published in:  " + str(self.creation_time)


class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return 'Category name: ' + self.name
