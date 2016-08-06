from rest_framework import generics
from .serializers import MenuSerializer
from .models import Menu


class MenuView(generics.RetrieveAPIView):
    """
        /menu/globo - Recupera menu Globo
    """
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
