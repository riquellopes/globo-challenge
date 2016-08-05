from django.conf.urls import url
from .views import MenuView

urlpatterns = [
    url(r'^menu/(?P<slug>\w+)/$', MenuView.as_view(lookup_field="slug"), name="menu_view")
]
