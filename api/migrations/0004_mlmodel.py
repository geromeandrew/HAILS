# Generated by Django 4.0.1 on 2022-12-09 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_instruction_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='MLModel',
            fields=[
                ('id', models.PositiveBigIntegerField(primary_key=True, serialize=False)),
                ('body', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
