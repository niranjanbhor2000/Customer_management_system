from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from .models import Customer
from .forms import CustomerForm


def customer_list(request):
    """ Return list of customers"""

    customers = Customer.objects.all()
    return render(request, 'customer_list.html', {'customers': customers})


def add_customer(request):
    """ Add new customers """

    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/customer-list/')
    else:
        form = CustomerForm()
    return render(request, 'add_customer.html', {'form': form})


def update_customer(request, customer_id):
    """ Update customer details"""

    customer = get_object_or_404(Customer, id=customer_id)
    if request.method == 'POST':
        form = CustomerForm(request.POST, instance=customer)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/customer-list/')
    else:
        form = CustomerForm(instance=customer)
    return render(request, 'update_customer.html', {'form': form, 'customer': customer})


def delete_customer(request, customer_id):
    """ Delete customer delete """
    customer = get_object_or_404(Customer, id=customer_id)
    customer.delete()
    return HttpResponseRedirect('/customer-list/')
