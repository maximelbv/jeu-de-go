# Generated by Django 4.1 on 2024-06-12 12:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_tournois_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='positions',
            old_name='sgf_id',
            new_name='sgf_metadata',
        ),
    ]