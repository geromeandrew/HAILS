from django.contrib import admin

from .models import Instruction
from .models import MLModel
from .models import Question
from .models import Accounts

# Register your models here.
admin.site.register(Instruction)
admin.site.register(MLModel)
admin.site.register(Question)
admin.site.register(Accounts)