from django.db import models

class Step(models.Model):
    order = models.PositiveIntegerField(null=False, blank=False, default=1)
    text = models.TextField()

class Ingredient(models.Model):
    text = models.TextField()

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    difficulty = models.CharField(max_length=50, blank=True, null=True)
    serves = models.CharField(max_length=50, blank=True, null=True)
    rating = models.CharField(max_length=50, blank=True, null=True)
    reviews = models.CharField(max_length=50, blank=True, null=True)
    vegetarian = models.BooleanField(default=False, null=True)
    vegan = models.BooleanField(default=False, null=True)
    keto = models.BooleanField(default=False, null=True)
    dairy_free = models.BooleanField(default=False, null=True)
    gluten_free = models.BooleanField(default=False, null=True)
    prep_time = models.CharField(max_length=50, blank=True, null=True)
    cook_time = models.CharField(max_length=50, blank=True, null=True)
    ingredients = models.ManyToManyField(Ingredient)
    steps = models.ManyToManyField(Step)
    recipe_url = models.URLField(blank=True, null=True)
    recipe_image_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title
