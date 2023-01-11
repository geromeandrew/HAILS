from django.contrib import admin

from .models import Instruction
from .models import MLModel
from .models import Question

# Register your models here.
admin.site.register(Instruction)
admin.site.register(MLModel)
admin.site.register(Question)
