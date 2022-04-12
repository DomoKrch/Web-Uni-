from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.list_products),
    path('categories/', views.list_categories),
    path('products/<int:id>', views.get_product),
    path('categories/<int:id>', views.get_category),
    path('categories/<int:id>/products', views.get_prods_by_categ)
]
