from django.urls import path

from recipes.views import RecipeList

from .views import search_google, extract_recipe, recipe, delete_recipe, search_recipes, create_schedule, get_events, \
    get_shopping_list, amend_shopping_list_item, new_shopping_list_item, clear_shopping_list, edit_shopping_list_item

urlpatterns = [
    path('recipe/<int:recipe_id>', recipe, name='recipe'),
    path('recipes/', RecipeList.as_view(), name='recipe-list'),
    path('recipes/<str:search_query>/', search_recipes),
    path('delete/', delete_recipe),
    path('extract-recipe/', extract_recipe),
    path('search-google/<str:search_term>/', search_google, ),
    path('create-schedule/', create_schedule),
    path('events/<int:week_number>/', get_events),
    path('shopping-list/', get_shopping_list),
    path('shopping-list/<int:item_id>/', amend_shopping_list_item),
    path('shopping-list-item/<int:item_id>/', edit_shopping_list_item),
    path('new-shopping-list-item/', new_shopping_list_item),
    path('clear-shopping-list/', clear_shopping_list),
]
