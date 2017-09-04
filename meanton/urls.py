from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.views import logout
from django.views.static import serve
from rest_framework.routers import SimpleRouter

from dictionaries.viewsets import DictionaryModelViewSet
from .settings import DEBUG, MEDIA_ROOT, STATIC_ROOT
from .views import login_view, index_view

router = SimpleRouter()
router.register(r'dictionaries', DictionaryModelViewSet, 'Dictionary')

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', index_view, name='index'),
    url(r'^login/$', login_view, name='login'),
    url(r'^logout/$', logout, name='logout', kwargs={'next_page': '/'}),
    url(r'^', include(router.urls)),
]

if DEBUG:
    urlpatterns += [
        url(r'^media/(?P<path>.*)$', serve, {
            'document_root': MEDIA_ROOT,
        }),
        url(r'^static/(?P<path>.*)$', serve, {
            'document_root': STATIC_ROOT,
        }),
]