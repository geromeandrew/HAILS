from django.contrib import admin

from .models import Instruction
from .models import MLModel

# Register your models here.
admin.site.register(Instruction)
admin.site.register(MLModel)
