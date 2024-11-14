from django.contrib import admin

from .models import Recipe, MealEvent, ShoppingListItem


# Register your models here.
@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    pass

@admin.register(MealEvent)
class MealEventAdmin(admin.ModelAdmin):
    pass

@admin.register(ShoppingListItem)
class ShoppingListItemAdmin(admin.ModelAdmin):
    pass