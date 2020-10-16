from django.db import models

# Create your models here.


class Weight(models.Model):
    weight = models.DecimalField((""), max_digits=3, decimal_places=1)
    date = models.DateField((""), auto_now=False, auto_now_add=False)
