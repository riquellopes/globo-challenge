from rest_framework import serializers
from .models import Menu, Item


class ItensSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("id", "label", "url", "parent", "level")


class MenuSerializer(serializers.ModelSerializer):
    itens = ItensSerializer(many=True)

    def field_from_native(self, *args, **kwargs):
        return None

    class Meta:
        model = Menu
        fields = ("id", "name", "itens")
