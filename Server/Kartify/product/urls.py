from django.urls import path
from . import views

urlpatterns = [
    path('add', views.AddProduct.as_view(), name='add_product'),
    path('list/<int:page_no>', views.ListProducts.as_view(), name='list_products'),
    path('<category>', views.ProductsByCategory.as_view(), name='products_by_category'),
    path('update/<product_id>', views.UpdateProductQuantity.as_view() , name='update_product'),
    path('details/<product_id>', views.ProductDetails.as_view(), name='product_details')
]