# Generated by Django 2.1.5 on 2019-03-30 23:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0004_auto_20190330_2311'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='thumbnail',
            field=models.ImageField(null=True, upload_to='assets/images'),
        ),
    ]
