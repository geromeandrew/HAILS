from rest_framework.response import Response
from rest_framework.decorators import api_view

from . serializers import InstructionSerializer
from . serializers import MLModelSerializer
from . serializers import QuestionSerializer
from . serializers import AnswerSerializer
from . models import Instruction
from . models import MLModel
from . models import Question
from . models import Answer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/instruction/',
            'Method': 'GET',
            'Description': 'Returns the array of instructions'
        },
        {
            'Endpoint': '/instruction/id',
            'Method': 'GET',
            'Description': 'Returns the specific instruction based on the id'
        },
        {
            'Endpoint': '/models/',
            'Method': 'GET',
            'Description': 'Returns all the ml model endpoints'
        },
        {
            'Endpoint': '/model/id',
            'Method': 'GET',
            'Description': 'Returns the specific ml model endpoint'
        },
        {
            'Endpoint': '/question/id',
            'Method': 'GET',
            'Description': 'Returns the specific question endpoint'
        },
        {
            'Endpoint': '/answer/id',
            'Method': 'GET',
            'Description': 'Returns the specific answer endpoint'
        }
    ]

    return Response(routes)


@api_view(['GET'])
def getInstructions(request):
    instructions = Instruction.objects.all()
    serializer = InstructionSerializer(instructions, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def getInstruction(request, pk):
    instructions = Instruction.objects.get(id=pk)
    serializer = InstructionSerializer(instructions, many=False)

    return Response(serializer.data)


@api_view(['GET'])
def getAllMLModel(request):
    models = MLModel.objects.all()
    serializer = MLModelSerializer(models, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def getMLModel(request, pk):
    model = MLModel.objects.get(id=pk)
    serializer = MLModelSerializer(model, many=False)

    return Response(serializer.data)


@api_view(['GET'])
def getQuestion(request, pk):
    question = Question.objects.get(id=pk)
    serializer = QuestionSerializer(question, many=False)

    return Response(serializer.data)


@api_view(['GET'])
def getAnswer(request, pk):
    answer = Answer.objects.get(id=pk)
    serializer = AnswerSerializer(answer, many=False)

    return Response(serializer.data)
