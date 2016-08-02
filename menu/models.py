from django.db import models
from django.db.models.signals import pre_save


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

    parent = models.ForeignKey("self", blank=True, null=True)
    level = models.IntegerField(editable=False, default=0)
    menu = models.ForeignKey(Menu)

    def __str__(self):
        return self.label


def before_save(sender, instance, **kwargs):
    if instance.parent:
        instance.level = instance.parent.level + 1
pre_save.connect(before_save, sender=Item)
