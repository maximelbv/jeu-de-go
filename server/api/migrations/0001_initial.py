# Generated by Django 4.1 on 2024-05-16 09:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=30, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=50, unique=True)),
                ('is_admin', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Tournois',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(max_length=100)),
                ('round', models.CharField(max_length=5)),
                ('black_player', models.CharField(max_length=100)),
                ('black_rank', models.CharField(max_length=100)),
                ('white_player', models.CharField(max_length=100)),
                ('white_rank', models.CharField(max_length=100)),
                ('komi', models.FloatField()),
                ('result', models.CharField(max_length=10)),
                ('date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Positions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('positions', models.CharField(max_length=2)),
                ('player', models.CharField(max_length=5)),
                ('tournois_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Tournois')),
            ],
        ),
        migrations.CreateModel(
            name='problems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('black_chip_positions', models.TextField()),
                ('white_chip_positions', models.TextField()),
                ('solution', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='problemsToValidate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('black_chip_positions', models.TextField()),
                ('white_chip_positions', models.TextField()),
                ('solution', models.CharField(max_length=2)),
            ],
        ),
    ]
