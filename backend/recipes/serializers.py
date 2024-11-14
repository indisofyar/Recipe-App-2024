from rest_framework import serializers

from .models import Recipe, Ingredient, Step, RecipeTag, MealEvent, ShoppingListItem, ShoppingList


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'


class StepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields = '__all__'


class RecipeTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeTag
        fields = '__all__'


class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)
    steps = StepSerializer(many=True)
    tags = RecipeTagSerializer(many=True, read_only=True)

    class Meta:
        model = Recipe
        fields = '__all__'


class MealEventSerializer(serializers.ModelSerializer):
    recipe = RecipeSerializer()
    date = serializers.DateField(format="%A %d %b")
    class Meta:
        model = MealEvent
        fields = '__all__'


class ShoppingListItemSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer()
    class Meta:
        model = ShoppingListItem
        fields = '__all__'


class ShoppingListSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()

    class Meta:
        model = ShoppingList
        fields = '__all__'

    def get_items(self, obj):
        # Order items by ingredient text in descending order
        ordered_items = obj.items.filter(checked=False).order_by('-ingredient__text')
        return ShoppingListItemSerializer(ordered_items, many=True).data