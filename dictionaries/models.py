from django.core.files import File
from django.db import models
from django.contrib.auth.models import User
from os.path import join
from model_utils.models import TimeStampedModel

from meanton.settings import MEDIA_ROOT
from .utils import generate_mp3_dict_from_text


class Dictionary(TimeStampedModel):
    user = models.ForeignKey(User, null=True)
    name = models.CharField(max_length=60, default='New Dictionary')
    input_lang = models.CharField(max_length=6, default='En')
    output_lang = models.CharField(max_length=6, default='Ru')
    translations = models.TextField(blank=True, default='[]')
    file = models.FileField(upload_to='files', blank=True)
    time_before_translation = models.IntegerField(default=50)
    time_between_translations = models.IntegerField(default=100)

    def save(self, *args, **kwargs):
        if generate_mp3_dict_from_text(self):
            file_name = self.name + ".mp3"
            local_file = open(join(MEDIA_ROOT, self.name + ".mp3"), mode='rb')
            self.file.save(file_name, File(local_file), save=False)
        super(Dictionary, self).save(*args, **kwargs)

