from django.contrib import admin

from menu.models import Menu, Item
from menu.forms import ItemForm


class ItemAdmin(admin.TabularInline):
    form = ItemForm
    model = Item


class MenuAdmin(admin.ModelAdmin):
    inlines = [
        ItemAdmin
    ]

admin.site.register(Menu, MenuAdmin)
