import os
import random

from django.utils.timezone import make_aware
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView

from .models import Recipe, Ingredient, Step, MealEvent, RecipeTag, ShoppingList, ShoppingListItem
from .serializers import RecipeSerializer, MealEventSerializer, ShoppingListSerializer, ShoppingListItemSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
from .models import MealEvent
from .serializers import MealEventSerializer

import datetime
import time
import warnings

import numpy as np
import pandas as pd
import requests
from bs4 import BeautifulSoup

warnings.filterwarnings('ignore')


class RecipeList(ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


@api_view(['GET'])
def recipe(request, recipe_id):
    return Response(RecipeSerializer(Recipe.objects.get(id=recipe_id)).data)


@api_view(['GET'])
def search_google(request, search_term):
    api_key = os.getenv('GOOGLE_SEARCH_API_KEY')
    print(api_key)
    url = 'https://www.googleapis.com/customsearch/v1?key=' + api_key + '&cx=6110553782a814b04&q=' + search_term + ' recipe'
    response = requests.get(url)
    print(response.json())
    return Response(response.json())


from rest_framework.decorators import api_view
from rest_framework.response import Response
from bs4 import BeautifulSoup
import requests
import time
from .models import Recipe  # Import the Recipe model
import numpy as np

from rest_framework.decorators import api_view
from rest_framework.response import Response
from bs4 import BeautifulSoup
import requests
import time
import numpy as np


def extract_bbc_user_recipe(html, url, image_url):
    soup = BeautifulSoup(html.text, 'html.parser')
    try:
        recipe_title = soup.find('h1', {'class': 'heading-1'}).text
    except:
        recipe_title = np.nan
    try:
        difficulty = soup.find_all('div', {'class': 'icon-with-text__children'})[1].text
    except:
        difficulty = np.nan
    try:
        serves = soup.find_all('div', {'class': 'icon-with-text__children'})[2].text
    except:
        serves = np.nan
    try:
        rating = soup.find_all('span', {'class': 'sr-only'})[26].text
    except:
        rating = np.nan
    try:
        number_of_review = soup.find('span', {'class': 'rating__count-text body-copy-small'}).text
    except:
        number_of_review = np.nan
    try:
        prep_time = soup.find('li', {'class': 'body-copy-small list-item'}).text
    except:
        prep_time = np.nan
    try:
        cook_time = soup.find_all('li', {'class': 'body-copy-small list-item'})[1].text
    except:
        cook_time = np.nan
    try:
        categories = soup.find_all('ul', {
            'class': 'terms-icons-list d-flex post-header__term-icons-list mt-sm hidden-print list list--horizontal'})[
            0].text
        vegetarian = 'Vegetarian' in categories
        vegan = 'Vegan' in categories
        keto = 'Keto' in categories
        dairy_free = 'Dairy-free' in categories
        gluten_free = 'Gluten-free' in categories
    except:
        vegetarian = None
        vegan = None
        keto = None
        dairy_free = None
        gluten_free = None

    # Collect ingredients as objects in a list instead of directly assigning them to the recipe
    ingredient_list = []
    ingredients = soup.find_all('li', {'class': 'pb-xxs pt-xxs list-item list-item--separator'})
    ingredients += soup.find_all('li', {'class': 'ingredients-list__item list-item list-item--separator-top'})

    for ingredient in ingredients:
        try:
            ingredient_string = ''.join(str(ingredient).split('<!-- -->')[1])
        except Exception as e:
            ingredient_string = ''.join(ingredient.text)

        ingredient_obj = Ingredient.objects.create(text=ingredient_string.replace('</li>', ''))
        ingredient_list.append(ingredient_obj)

    print(f'Loaded recipe: {recipe_title}')

    # Collect steps as objects in a list
    steps_list = []
    steps = soup.find_all('li', {'class': 'pb-xs pt-xs list-item'})

    for i, step in enumerate(steps):
        # Directly access the <p> element within the step
        text = step.find('div', {'class': 'editor-content'})

        # Check if <p> element exists before proceeding
        if text:
            step_obj = Step.objects.create(text=text.get_text(strip=True), order=i)
            steps_list.append(step_obj)

    recipe_data = {
        'title': recipe_title,
        'difficulty': difficulty,
        'serves': serves,
        'rating': rating,
        'reviews': number_of_review,
        'vegetarian': vegetarian,
        'vegan': vegan,
        'keto': keto,
        'dairy_free': dairy_free,
        'gluten_free': gluten_free,
        'prep_time': prep_time,
        'cook_time': cook_time,
        'ingredients': ingredient_list,
    }

    recipe = Recipe.objects.filter(title=recipe_title)

    # Save to the database
    if recipe_title and not Recipe.objects.filter(title=recipe_title).exists():

        recipe = Recipe.objects.create(
            title=recipe_data['title'],
            difficulty=recipe_data.get('difficulty'),
            serves=recipe_data.get('serves'),
            rating=recipe_data.get('rating'),
            reviews=recipe_data.get('reviews'),
            vegetarian=recipe_data.get('vegetarian'),
            vegan=recipe_data.get('vegan'),
            keto=recipe_data.get('keto'),
            dairy_free=recipe_data.get('dairy_free'),
            gluten_free=recipe_data.get('gluten_free'),
            prep_time=recipe_data.get('prep_time'),
            cook_time=recipe_data.get('cook_time'),
            recipe_image_url=image_url,
            recipe_url=url,
        )

        # Use `.set()` to assign ingredients to the many-to-many field
        recipe.ingredients.set(ingredient_list)
        recipe.steps.set(steps_list)
        recipe.save()
        print(f"Recipe '{recipe.title}' saved to the database.")
    else:
        recipe = recipe.first()
        print(f"Recipe '{recipe_title}' already exists in the database.")

    return recipe


def extract_bbc_curator_recipe(html, url, image_url):
    soup = BeautifulSoup(html.text, 'html.parser')
    try:
        recipe_title = soup.find('h1', {'class': 'heading-1'}).text
    except:
        recipe_title = np.nan
    try:
        difficulty = soup.find_all('div', {'class': 'icon-with-text__children'})[1].text
    except:
        difficulty = np.nan
    try:
        serves = soup.find_all('div', {'class': 'icon-with-text__children'})[2].text
    except:
        serves = np.nan
    try:
        rating = soup.find_all('span', {'class': 'sr-only'})[26].text
    except:
        rating = np.nan
    try:
        number_of_review = soup.find('span', {'class': 'rating__count-text body-copy-small'}).text
    except:
        number_of_review = np.nan
    try:
        prep_time = soup.find('li', {'class': 'body-copy-small list-item'}).text
    except:
        prep_time = np.nan
    try:
        cook_time = soup.find_all('li', {'class': 'body-copy-small list-item'})[1].text
    except:
        cook_time = np.nan
    try:
        categories = soup.find_all('ul', {
            'class': 'terms-icons-list d-flex post-header__term-icons-list mt-sm hidden-print list list--horizontal'})[
            0].text
        vegetarian = 'Vegetarian' in categories
        vegan = 'Vegan' in categories
        keto = 'Keto' in categories
        dairy_free = 'Dairy-free' in categories
        gluten_free = 'Gluten-free' in categories
    except:
        vegetarian = None
        vegan = None
        keto = None
        dairy_free = None
        gluten_free = None

    # Collect ingredients as objects in a list instead of directly assigning them to the recipe
    ingredient_list = []
    ingredients = soup.find_all('li', {'class': 'ingredients-list__item list-item'})
    ingredients += soup.find_all('li', {'class': 'ingredients-list__item list-item list-item--separator-top'})

    for ingredient in ingredients:
        try:
            ingredient_string = ''.join(str(ingredient).split('<!-- -->')[1])
        except Exception as e:
            ingredient_string = ''.join(ingredient.text)

        ingredient_obj = Ingredient.objects.create(text=ingredient_string.replace('</li>', ''))
        ingredient_list.append(ingredient_obj)

    print(f'Loaded recipe: {recipe_title}')

    # Collect steps as objects in a list
    steps_list = []
    steps = soup.find_all('li', {'class': 'method-steps__list-item'})

    for i, step in enumerate(steps):
        # Directly access the <p> element within the step
        text = step.find('p')

        # Check if <p> element exists before proceeding
        if text:
            step_obj = Step.objects.create(text=text.get_text(strip=False), order=i)
            steps_list.append(step_obj)

    recipe_data = {
        'title': recipe_title,
        'difficulty': difficulty,
        'serves': serves,
        'rating': rating,
        'reviews': number_of_review,
        'vegetarian': vegetarian,
        'vegan': vegan,
        'keto': keto,
        'dairy_free': dairy_free,
        'gluten_free': gluten_free,
        'prep_time': prep_time,
        'cook_time': cook_time,
        'ingredients': ingredient_list,
    }

    recipe = Recipe.objects.filter(title=recipe_title)

    # Save to the database
    if recipe_title and not Recipe.objects.filter(title=recipe_title).exists():

        recipe = Recipe.objects.create(
            title=recipe_data['title'],
            difficulty=recipe_data.get('difficulty'),
            serves=recipe_data.get('serves'),
            rating=recipe_data.get('rating'),
            reviews=recipe_data.get('reviews'),
            vegetarian=recipe_data.get('vegetarian'),
            vegan=recipe_data.get('vegan'),
            keto=recipe_data.get('keto'),
            dairy_free=recipe_data.get('dairy_free'),
            gluten_free=recipe_data.get('gluten_free'),
            prep_time=recipe_data.get('prep_time'),
            cook_time=recipe_data.get('cook_time'),
            recipe_image_url=image_url,
            recipe_url=url,
        )

        # Use `.set()` to assign ingredients to the many-to-many field
        recipe.ingredients.set(ingredient_list)
        recipe.steps.set(steps_list)
        recipe.save()
        print(f"Recipe '{recipe.title}' saved to the database.")
    else:
        recipe = recipe.first()
        print(f"Recipe '{recipe_title}' already exists in the database.")

    return recipe


def clean_recipe(recipe):
    non_vegetarian_items = [
        'beef', 'pork', 'veal', 'lamb', 'chicken', 'turkey', 'duck', 'goose',
        'fish', 'salmon', 'tuna', 'trout', 'mackerel', 'sardine', 'anchovy',
        'shrimp', 'prawn', 'lobster', 'crab', 'scallop', 'clam', 'oyster',
        'octopus', 'squid', 'mussel'
    ]

    # Check if any non-vegetarian item is found in any of the recipe ingredients
    has_meat = any(
        meat in ingredient.text.lower() for ingredient in recipe.ingredients.all() for meat in non_vegetarian_items
    )

    if not has_meat:
        veg_tag, created = RecipeTag.objects.get_or_create(text=RecipeTag.TAG_VEGETARIAN)
        recipe.tags.add(veg_tag)
        recipe.save()
        print('no meat')
    else:
        print('meat found')

    return recipe


@api_view(['POST'])
def extract_recipe(request):
    recipe_data = None

    sleep_timer = 1
    time.sleep(sleep_timer)
    url = request.data['url']

    image_url = request.data['image_url'] if 'image_url' in request.data else None
    html = requests.get(url)

    if 'bbcgoodfood.com/user/' in url:
        recipe = extract_bbc_user_recipe(html=html, url=url, image_url=image_url)
        recipe = clean_recipe(recipe)
    elif 'bbcgoodfood' in url:
        recipe = extract_bbc_curator_recipe(html=html, url=url, image_url=image_url)
        recipe = clean_recipe(recipe)

    return Response(RecipeSerializer(recipe).data)


def range_of_numbers(n):
    return list(range(1, n + 1))


@api_view(['POST'])
def delete_recipe(request):
    recipe = Recipe.objects.get(id=request.data['id']).delete()
    return Response('Recipe deleted')


@api_view(['GET'])
def search_recipes(request, search_query):
    recipes = Recipe.objects.filter(title__icontains=search_query)
    return Response(RecipeSerializer(recipes, many=True).data)


@api_view(['POST'])
def create_schedule(request):
    def create_date(week, day):
        # Get today's date and start of the week (assuming weeks start on Monday)
        today = datetime.datetime.today()
        start_of_this_week = today - datetime.timedelta(days=today.weekday())  # This week's Monday

        # Calculate start of next week if requested
        if week == "Next Week":
            start_of_week = start_of_this_week + datetime.timedelta(weeks=1)
        else:
            start_of_week = start_of_this_week  # Default to this week

        # Map day names to weekday numbers (0=Monday, 1=Tuesday, ..., 6=Sunday)
        day_map = {
            "Monday": 0,
            "Tuesday": 1,
            "Wednesday": 2,
            "Thursday": 3,
            "Friday": 4,
            "Saturday": 5,
            "Sunday": 6,
        }

        # Calculate the target date for the given day
        day_offset = day_map.get(day, 0)  # Default to Monday if day is invalid
        target_date = start_of_week + datetime.timedelta(days=day_offset)

        # Make the date timezone-aware if necessary (e.g., for use in Django)
        return make_aware(target_date)

    select_meal_table = request.data.get('selectMealTable', [])
    preferences = request.data.get('preferences', [])
    meals = []
    week = request.data.get('week')

    # Process each row in the meal table
    for row in select_meal_table:
        day = row[0]  # Assuming the first item in each row is the day
        for index, col in enumerate(row[1:], start=1):
            if isinstance(col, bool) and col:
                meal_type = (
                    MealEvent.TYPE_BREAKFAST if index == 1 else
                    MealEvent.TYPE_LUNCH if index == 2 else
                    MealEvent.TYPE_DINNER
                )
                meals.append({
                    'meal_type': meal_type,
                    'day': day
                })

    number_of_meals = len(meals)

    processed_preferences = {
        'vegetarian': None,
        'vegan': None,
    }

    # Put preferences in a more readable format
    for preference in preferences:
        if preference['number'] is not None:
            type = preference['type']
            processed_preferences[type] = preference['number']

    def find_recipe(tag):
        recipes = Recipe.objects.filter(tags__in=[tag])
        return random.sample(list(recipes), 1)[0]

    for meal in meals:
        # Delete meals of the same type
        MealEvent.objects.filter(
            date=create_date(week=week, day=meal['day']),
            type=meal['meal_type'],
        ).delete()

        for key, value in processed_preferences.items():
            if key == 'vegetarian':
                veg_tag, created = RecipeTag.objects.get_or_create(text=RecipeTag.TAG_VEGETARIAN)
                recipe = find_recipe(veg_tag)

                meal_event = MealEvent.objects.create(
                    date=create_date(week=week, day=meal['day']),
                    recipe=recipe,
                    type=meal['meal_type'],
                )

                shopping_list, created = ShoppingList.objects.get_or_create(user=request.user)
                for ingredient in recipe.ingredients.all():
                    list_item = ShoppingListItem.objects.create(
                        ingredient=ingredient,
                    )
                    shopping_list.items.add(list_item)

        number_of_meals = number_of_meals - 1

    return Response({'meals': meals, 'number_of_meals': len(meals)}, status=200)


@api_view(['GET'])
def get_events(request, week_number):
    today = datetime.datetime.today()

    if week_number == 0:
        start_of_week = today - datetime.timedelta(days=today.weekday())
        end_of_week = start_of_week + datetime.timedelta(days=6)
    else:
        start_of_week = today - datetime.timedelta(days=today.weekday()) + datetime.timedelta(weeks=week_number)
        end_of_week = start_of_week + datetime.timedelta(days=6)

    meal_events = MealEvent.objects.filter(date__gte=start_of_week, date__lte=end_of_week).order_by('date')

    return Response(MealEventSerializer(meal_events, many=True).data)


@api_view(['GET'])
def get_shopping_list(request):
    shopping_list = ShoppingList.objects.get(user=request.user)
    return Response(ShoppingListSerializer(shopping_list).data)


@api_view(['POST'])
def amend_shopping_list_item(request, item_id):
    item = ShoppingListItem.objects.get(id=item_id)
    item.checked = not item.checked
    item.save()
    return Response(item.checked)


@api_view(['POST'])
def edit_shopping_list_item(request, item_id):
    item = ShoppingListItem.objects.get(id=item_id)
    item.checked = request.data['checked']
    item.ingredient.text = request.data['ingredient']['text']
    item.save()
    return Response(item.checked)


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import ShoppingListItem, ShoppingList, Ingredient
from .serializers import ShoppingListItemSerializer


@api_view(['POST'])
def new_shopping_list_item(request):
    data = request.data
    id = data.get('id')
    checked = data.get('checked')
    text = data.get('text')
    shopping_list_id = data.get('shoppingListId')

    # Ensure required fields are present
    if checked is None or text is None:
        return Response({"error": "Both 'checked' and 'text' are required fields."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        if id is not None:
            item = get_object_or_404(ShoppingListItem, id=id)
            item.checked = checked
            if hasattr(item, 'ingredient') and item.ingredient:
                item.ingredient.text = text
                item.ingredient.save()
            else:
                item.ingredient = Ingredient.objects.create(text=text)
            item.save()
        else:
            ingredient = Ingredient.objects.create(text=text)
            item = ShoppingListItem.objects.create(checked=checked, ingredient=ingredient)
            shopping_list = get_object_or_404(ShoppingList, id=shopping_list_id)
            shopping_list.items.add(item)

        serialized_item = ShoppingListItemSerializer(item)
        return Response(serialized_item.data, status=status.HTTP_201_CREATED)

    except Exception as e:
        print(f"Error: {e}")
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def clear_shopping_list(request):
    shopping_list = ShoppingList.objects.get(user=request.user)
    shopping_list.items.all().delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
