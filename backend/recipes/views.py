import os

import time

from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from .models import Recipe, Ingredient, Step
from .serializers import RecipeSerializer


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
        vegetarian = False
        vegan = False
        keto = False
        dairy_free = False
        gluten_free = False

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
        vegetarian = False
        vegan = False
        keto = False
        dairy_free = False
        gluten_free = False

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
    elif 'bbcgoodfood' in url:
        recipe = extract_bbc_curator_recipe(html=html, url=url, image_url=image_url)

    return Response(RecipeSerializer(recipe).data)


import datetime
import time
import warnings

import numpy as np
import pandas as pd
import requests
from bs4 import BeautifulSoup

warnings.filterwarnings('ignore')


def range_of_numbers(n):
    return list(range(1, n + 1))


@api_view(['POST'])
def delete_recipe(request):
    recipe = Recipe.objects.get(id=request.data['id']).delete()
    return Response('Recipe deleted')
