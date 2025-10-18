from django.db import models

class SeaLion(models.Model):
    name = models.CharField(max_length=100)
    species = models.CharField(max_length=100)
    habitat = models.CharField(max_length=200)
    weight_range = models.CharField(max_length=50)
    diet = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.species}"

class Fact(models.Model):
    content = models.TextField()
    category = models.CharField(max_length=50, default='general')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content[:50]