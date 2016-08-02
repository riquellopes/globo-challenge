import factory
from menu.models import Menu, Item


class MenuFactory(factory.django.DjangoModelFactory):

    class Meta:
        model = Menu
        django_get_or_create = ("name", )

    name = "Globo"


class ItemGrandmaFactory(factory.django.DjangoModelFactory):

    class Meta:
        model = Item
        django_get_or_create = ("label", )
    menu = factory.SubFactory(MenuFactory)
    level = 0
    label = "Grandma"
    url = "http://grandma"


class ItemFatherFactory(factory.django.DjangoModelFactory):

    class Meta:
        model = Item
        django_get_or_create = ("label", )

    menu = factory.SubFactory(MenuFactory)
    parent = factory.SubFactory(ItemGrandmaFactory)
    level = 1
    label = "Father"
    url = "http://father"


class ItemSonFactory(factory.django.DjangoModelFactory):

    class Meta:
        model = Item
        django_get_or_create = ("label", )

    menu = factory.SubFactory(MenuFactory)
    parent = factory.SubFactory(ItemFatherFactory)
    label = "Son"
    url = "http://son"
