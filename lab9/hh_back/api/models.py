from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default='')
    city = models.CharField(max_length=200)
    address = models.TextField(default='')

    objects = models.Manager()


class Vacancy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default='')
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    objects = models.Manager()
