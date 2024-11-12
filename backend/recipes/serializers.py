from rest_framework import serializers

from .models import Recipe, Ingredient, Step


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'
class StepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields = '__all__'
class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)
    steps = StepSerializer(many=True)
    class Meta:
        model = Recipe
        fields = '__all__'