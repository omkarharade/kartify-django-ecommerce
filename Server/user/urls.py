from django.contrib import admin
from django.urls import path, include
from user.views import BuyerViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'buyer', BuyerViewSet)




urlpatterns = [

    path('',include(router.urls))

]