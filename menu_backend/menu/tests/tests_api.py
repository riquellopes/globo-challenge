import pytest
from .factories import MenuFactory, ItemGrandmaFactory


@pytest.mark.django_db
def test_when_service_menu_is_called_with_globo_should_return_200(client):
    MenuFactory()
    ItemGrandmaFactory()

    response = client.get("/app/menu/globo/")
    assert response.status_code == 200
    assert response.data['id'] == 1
    assert response.data['name'] == "Globo"
    assert len(response.data['itens']) == 1


@pytest.mark.django_db
def test_when_service_menu_is_called_with_sbt_return_404(client):

    response = client.get("/app/menu/sbt/")
    assert response.status_code == 404


@pytest.mark.django_db
def test_when_service_menu_is_called_to_source_that_not_exist_return_301(client):
    response = client.get("/app/menu/globo")
    assert response.status_code == 301
