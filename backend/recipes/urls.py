from django.urls import path

from recipes.views import RecipeList

from .views import search_google, extract_recipe, recipe, delete_recipe

urlpatterns = [
    path('recipe/<int:recipe_id>', recipe, name='recipe'),
    path('recipes/', RecipeList.as_view(), name='recipe-list'),
    path('delete/', delete_recipe),
    path('extract-recipe/', extract_recipe),
    path('search-google/<str:search_term>/', search_google, ),
]
