from django.forms import ModelForm
from django.conf import settings
from .models import Item


class ItemForm(ModelForm):

    def clean(self):
        if self.cleaned_data['parent']:
            parent_level = self.cleaned_data['parent'].level
            if parent_level == settings.LIMIT_ITENS:
                self.add_error(
                    "parent", "Você chegou no limite de sub itens que o menu suporta.")
        return self.cleaned_data

    class Meta:
        model = Item
        exclude = ("level", )
