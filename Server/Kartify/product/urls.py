from django.urls import path
from . import views

urlpatterns = [
    path('add', views.AddProduct.as_view(), name='add_product'),
    path('list/<int:page_no>', views.ListProducts.as_view(), name='list_products'),
    path('<category>', views.products_by_category, name='products_by_category'),
    path('update/<product_id>', views.update_product, name='update_product'),
    path('details/<product_id>', views.product_details, name='product_details')
]