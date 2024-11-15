from django.db import models

from account.models import User


class Step(models.Model):
    order = models.PositiveIntegerField(null=False, blank=False, default=1)
    text = models.TextField()


class Ingredient(models.Model):
    text = models.TextField()


class RecipeTag(models.Model):
    TAG_VEGAN = 'vegan'
    TAG_VEGETARIAN = 'vegetarian'

    TAG_CHOICES = [
        (TAG_VEGAN, 'vegan'),
        (TAG_VEGAN, 'vegetarian'),
    ]

    text = models.CharField(max_length=50, choices=TAG_CHOICES, unique=True)

    def __str__(self):
        return self.text


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
    tags = models.ManyToManyField(RecipeTag)

    def __str__(self):
        return self.title




class MealEvent(models.Model):
    date = models.DateField()
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='meal_events', null=True)

    TYPE_BREAKFAST = 'Breakfast'
    TYPE_LUNCH = 'Lunch'
    TYPE_DINNER = 'Dinner'

    TYPE_CHOICES = [
        (TYPE_BREAKFAST, 'Breakfast'),
        (TYPE_LUNCH, 'Lunch'),
        (TYPE_DINNER, 'Dinner'),
    ]

    type = models.CharField(max_length=50, choices=TYPE_CHOICES)

    def __str__(self):
        return self.date.strftime("%A %d %b") + ' ' + self.type

class ShoppingListItem(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    checked = models.BooleanField(default=False)

    def __str__(self):
        if self.ingredient:
            return self.ingredient.text + ' ' + str(self.id)
        else:
            return self.id

class ShoppingList(models.Model):
    items = models.ManyToManyField(ShoppingListItem)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)