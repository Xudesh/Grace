from django.contrib import admin
from .models import *



class SizeAdmin(admin.StackedInline):
    model = Size
    prepopulated_fields = {
        'slug': ['size']
    }


class ProductAdmin(admin.ModelAdmin):
    inlines = [Size]


admin.site.register(Product) 
admin.site.register(Size) 
