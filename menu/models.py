from django.db import models
from django.template.defaultfilters import slugify
from django.db.models.signals import pre_save


class Menu(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(editable=False)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Menu, self).save(*args, **kwargs)


class Item(models.Model):
    """
        Estilo > Beleza > Unhas
    """
    url = models.URLField()
    label = models.CharField(max_length=100)

    parent = models.ForeignKey("self", blank=True, null=True, related_name="sub_itens")
    level = models.IntegerField(editable=False, default=0)
    menu = models.ForeignKey(Menu, related_name="itens")

    class Meta:
        ordering = ['level', ]

    def __str__(self):
        return self.label


def before_save(sender, instance, **kwargs):
    if instance.parent:
        instance.level = instance.parent.level + 1
pre_save.connect(before_save, sender=Item)
