from django.contrib import admin
from .models import SeaLion, Fact

@admin.register(SeaLion)
class SeaLionAdmin(admin.ModelAdmin):
    list_display = ['name', 'species', 'habitat', 'created_at']
    search_fields = ['name', 'species']

@admin.register(Fact)
class FactAdmin(admin.ModelAdmin):
    list_display = ['content', 'category', 'created_at']
    list_filter = ['category']