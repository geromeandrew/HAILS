from rest_framework.serializers import ModelSerializer

from . models import Instruction
from . models import MLModel
from . models import Question


class InstructionSerializer(ModelSerializer):
    class Meta:
        model = Instruction
        fields = '__all__'


class MLModelSerializer(ModelSerializer):
    class Meta:
        model = MLModel
        fields = '__all__'


class QuestionSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'
