# Generated by Django 4.2.3 on 2023-08-17 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_alter_products_category_alter_products_product_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='product_id',
            field=models.CharField(max_length=10, primary_key=True, serialize=False),
        ),
    ]
