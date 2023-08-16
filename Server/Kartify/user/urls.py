from django.urls import path, include
# from user.views import BuyerViewSet
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'buyer', views.BuyerViewSet)


urlpatterns = [

    path('',include(router.urls)),
    path('list', views.ListBuyers.as_view()),
    path('register', views.RegisterUser.as_view()),
    path('login', views.LoginUser.as_view()),
    path('login2', views.LoginAPI.as_view()),

]