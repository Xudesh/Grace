# Generated by Django 5.0.3 on 2024-03-26 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('graceapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(null=True, upload_to='products/'),
        ),
    ]
