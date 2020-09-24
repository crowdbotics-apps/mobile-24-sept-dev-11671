from rest_framework import authentication
from jhgjhgj.models import JHgjhgjhgjh
from .serializers import JHgjhgjhgjhSerializer
from rest_framework import viewsets


class JHgjhgjhgjhViewSet(viewsets.ModelViewSet):
    serializer_class = JHgjhgjhgjhSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = JHgjhgjhgjh.objects.all()
