# Generated by Django 2.1.5 on 2019-03-30 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('readers', '0003_auto_20190326_2339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='markasread',
            name='date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]