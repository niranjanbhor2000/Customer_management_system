import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';

function App() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    // Simulated API call to fetch customer data
    axios.get('http://127.0.0.1:8000/customer-list/') 
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching customer data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  const handleAddCustomer = (newCustomer) => {
    // Simulated API call to add a new customer
    axios.post('https://127.0.0.1:8000/add-customer/', newCustomer) 
      .then(response => {
        setCustomers([...customers, response.data]);
      })
      .catch(error => {
        console.error('Error adding a new customer:', error);
      });
  };

  const handleDeleteCustomer = (customerId) => {
    // Simulated API call to delete a customer
    axios.delete(`https://127.0.0.1:8000/delete-customer/${customerId}`)
      .then(() => {
        setCustomers(customers.filter((customer) => customer.id !== customerId));
      })
      .catch(error => {
        console.error('Error deleting a customer:', error);
      });
  };

  const handleUpdateCustomer = (customer) => {
    setEditingCustomer(customer);
  };

  const handleSaveUpdate = (updatedCustomer) => {
    // Simulated API call to update a customer
    axios.put(`https:////127.0.0.1:8000/update-customer/${updatedCustomer.id}`, updatedCustomer)
      .then(() => {
        setCustomers((prevCustomers) =>
          prevCustomers.map((c) =>
            c.id === updatedCustomer.id ? updatedCustomer : c
          )
        );
        setEditingCustomer(null);
      })
      .catch(error => {
        console.error('Error updating a customer:', error);
      });
  };

  return (
    <div>
      <center><h1>Customer Management</h1></center>
      <CustomerForm
        onAddCustomer={handleAddCustomer}
        editingCustomer={editingCustomer}
        onSaveUpdate={handleSaveUpdate}
      />
    
      <CustomerList
        customers={customers}
        onDelete={handleDeleteCustomer}
        onUpdate={handleUpdateCustomer}
      />
    </div>
  );
}

export default App;
