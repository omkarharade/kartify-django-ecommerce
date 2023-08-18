from django.urls import path, include
from . import views


urlpatterns = [

    path('list', views.ListBuyers.as_view()),
    path('register', views.RegisterUser.as_view()),
    path('login', views.LoginUser.as_view()),
    

]