from rest_framework.serializers import ModelSerializer

from .models import Dictionary


class DictionarySerializer(ModelSerializer):

    class Meta:
        model = Dictionary
        fields = ('pk', 'user', 'name', 'input_lang', 'output_lang', 'translations',
                  'file', 'time_before_translation', 'time_between_translations')
