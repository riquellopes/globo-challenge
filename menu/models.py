from django.db import models


class Menu(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Item(models.Model):
    """
        Estilo > Beleza > Unhas
    """
    url = models.URLField()
    label = models.CharField(max_length=100)

    parent = models.ForeignKey("self", blank=True)
    level = models.IntergerField(editable=False, default=0)
    menu = models.ForeignKey(Menu)

    def __str__(self):
        return self.label
