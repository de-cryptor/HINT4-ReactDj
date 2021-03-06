# Generated by Django 2.1.5 on 2019-03-30 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utility', '0003_apilog'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmailVerification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('code', models.CharField(max_length=6)),
                ('datetime', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Email Code',
                'verbose_name_plural': 'Email Codes',
            },
        ),
    ]
