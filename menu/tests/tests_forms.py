import pytest
from menu.forms import ItemForm
from .factories import MenuFactory, ItemSonFactory


@pytest.fixture
def menu():
    return MenuFactory()


@pytest.mark.django_db
def test_is_valid_should_return_true_when_ok(mock, menu):
    mock.patch.object(ItemForm, "save")

    item = ItemForm(data={
        "url": "http://globinho.com",
        "label": "globinho",
        "parent": None,
        "menu": menu.id
    })

    assert item.is_valid()


@pytest.mark.django_db
def test_is_valid_should_return_false_when_not_ok(mock, menu):
    mock.patch.object(ItemForm, "save")

    item = ItemForm(data={
        "url": "http://globinho.com",
        "label": "globinho",
        "parent": ItemSonFactory().id,
        "menu": menu.id
    })

    assert item.is_valid() is False
    assert item.errors['parent'][0] == "Você chegou no limite de sub itens que o menu suporta."
