# Generated by Django 5.1.3 on 2024-11-11 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_recipe_cook_time_recipe_dairy_free_recipe_difficulty_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='recipe_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]