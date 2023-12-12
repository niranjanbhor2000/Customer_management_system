# customers/forms.py
from django import forms
from .models import Customer

class CustomerForm(forms.ModelForm):
    """ Get data in form """
    class Meta:
        model = Customer
        fields = '__all__'
