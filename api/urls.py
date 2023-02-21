from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('instructions/', views.getInstructions, name='instructions'),
    path('instruction/<str:pk>/', views.getInstruction, name='instruction'),
    path('models/', views.getAllMLModel, name='all-models'),
    path('model/<str:pk>', views.getMLModel, name='model'),
    path('question/<str:pk>/', views.getQuestion, name='question'),
    
]
