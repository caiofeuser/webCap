from django.contrib import admin
from django.urls import path, include
from core.views import ActivityView, ImcView, CalculateImcView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'activities', ActivityView, 'activity')
router.register(r'imc', ImcView, 'imc')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/calculation', CalculateImcView.as_view(), name='calculation')
]