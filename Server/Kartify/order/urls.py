from django.urls import path
from order import views

urlpatterns = [
    path('', views.Order.as_view(), name='order_product'),
]