# Generated by Django 4.2.3 on 2023-08-14 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_rename_conatact_no_buyers_contact_no'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyers',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
