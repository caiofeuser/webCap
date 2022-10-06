from django.contrib import admin
from .models import Activity
from .models import ImcCalculation
# Register your models here.

class ActivityAdmin(admin.ModelAdmin):
  fields  = ('title', 'completed', 'description', 'created_at', 'updated_at')


class ImcAdmin(admin.ModelAdmin):
  fields = ('name', 'weight', 'height',)


admin.site.register(Activity, ActivityAdmin)
admin.site.register(ImcCalculation, ImcAdmin)