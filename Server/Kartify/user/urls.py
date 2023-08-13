from django.contrib import admin
from django.urls import path, include
# from user.views import BuyerViewSet
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'buyer', views.BuyerViewSet)




urlpatterns = [

    path('',include(router.urls)),
    path('list', views.list_buyers),
    path('add', views.add_buyer),

]