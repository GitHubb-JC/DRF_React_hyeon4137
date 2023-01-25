# Generated by Django 3.2.13 on 2023-01-17 09:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_pk', models.IntegerField(blank=True)),
                ('email', models.EmailField(blank=True, max_length=500)),
                ('mygit', models.CharField(blank=True, max_length=50)),
                ('nickname', models.CharField(blank=True, max_length=200)),
                ('photo', models.ImageField(default='red.jpg', upload_to='profile/image')),
                ('myInfo', models.CharField(blank=True, max_length=150)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
