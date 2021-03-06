# Generated by Django 2.1.5 on 2019-03-26 23:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('utility', '0003_apilog'),
        ('readers', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MarkAsRead',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('read', models.BooleanField(default=True)),
                ('rating', models.IntegerField()),
                ('date', models.DateField()),
                ('gender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='utility.Gender')),
                ('region', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='utility.Region')),
            ],
            options={
                'verbose_name_plural': 'Mark As Reads',
                'verbose_name': 'Mark as Reads',
            },
        ),
    ]
