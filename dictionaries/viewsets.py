from rest_framework.viewsets import ModelViewSet

from .models import Dictionary
from .serializers import DictionarySerializer


class DictionaryModelViewSet(ModelViewSet):
    model = Dictionary
    serializer_class = DictionarySerializer

    def get_queryset(self):
        user = self.request.user
        return self.model.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


