# Generated by Django 4.0.1 on 2022-12-09 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_instruction_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='instruction',
            name='id',
            field=models.PositiveBigIntegerField(primary_key=True, serialize=False),
        ),
    ]
