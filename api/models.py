from django.db import models

# Create your models here.


class Instruction(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    body = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.body


class MLModel(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    body = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.body


class Question(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    body = models.CharField(max_length=50)

    def __str__(self):
        return self.body


class Accounts(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username


class Answer(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    body = models.CharField(max_length=50)

    def __str__(self):
        return self.body
