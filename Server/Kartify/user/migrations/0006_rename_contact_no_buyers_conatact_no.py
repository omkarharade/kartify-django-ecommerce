# Generated by Django 4.2.3 on 2023-08-17 23:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_delete_customlogentry'),
    ]

    operations = [
        migrations.RenameField(
            model_name='buyers',
            old_name='contact_no',
            new_name='conatact_no',
        ),
    ]