import pytest
from .factories import ItemGrandmaFactory, ItemFatherFactory, ItemSonFactory


@pytest.mark.django_db
def test_when_item_have_a_parent_add_1_level():
    gran = ItemGrandmaFactory()
    assert gran.level == 0

    father = ItemFatherFactory()
    assert father.level == 1

    son = ItemSonFactory()
    assert son.level == 2
