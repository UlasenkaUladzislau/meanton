from json import loads
from gtts import gTTS
from pydub import AudioSegment
from os.path import join

from meanton.settings import MEDIA_ROOT


def generate_mp3_dict_from_text(dictionary):
    translations = loads(dictionary.translations)
    if translations:
        # TODO: need to find way to generate mp3 file without unnecessary saving temporary files
        empty_file = AudioSegment.from_mp3(join(MEDIA_ROOT, 'silence.mp3'))
        the_gap_between = empty_file[:dictionary.time_between_translations]
        the_gap_before = empty_file[:dictionary.time_before_translation]
        file = empty_file[:1]

        for translation in translations:
            from_world = gTTS(text=translation['input'], lang=dictionary.input_lang, slow=True)
            from_world.save(join(MEDIA_ROOT, 'from_world.mp3'))
            to_world = gTTS(text=translation['output'], lang=dictionary.output_lang, slow=True)
            to_world.save(join(MEDIA_ROOT, 'to_world.mp3'))
            to_world_mp3 = AudioSegment.from_mp3(join(MEDIA_ROOT, 'to_world.mp3'))
            from_world_mp3 = AudioSegment.from_mp3(join(MEDIA_ROOT, 'from_world.mp3'))
            file = file + from_world_mp3 + the_gap_before + to_world_mp3 + the_gap_between
        file_path = join(MEDIA_ROOT, dictionary.name + ".mp3")
        file.export(file_path, format="mp3")
        return file_path
    return False
