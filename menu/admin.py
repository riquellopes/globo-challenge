from django.contrib import admin
from menu.models import Menu, Item
from menu.forms import ItemForm


class ItemAdmin(admin.ModelAdmin):
    form = ItemForm


admin.site.register(Menu)
admin.site.register(Item, ItemAdmin)
