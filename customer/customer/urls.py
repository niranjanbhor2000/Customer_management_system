from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # include custmor app url route
    path('', include('customers.urls')),
]