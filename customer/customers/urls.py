# customers/urls.py
from django.urls import path
from .views import customer_list, add_customer, update_customer, delete_customer

urlpatterns = [
    # URL route for customers list
    path('customer-list/', customer_list, name='customer_list'),
    # URL route for Create new customer entry.
    path('add-customer/', add_customer, name='add_customer'),
    # URL route for update customer details.
    path('update-customer/<int:customer_id>/', update_customer, name='update_customer'),
    # URL Route for delete customer entry.
    path('delete-customer/<int:customer_id>/', delete_customer, name='delete_customer'),
]