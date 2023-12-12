import React, { useState, useEffect } from 'react';

const CustomerForm = ({ onAddCustomer, editingCustomer, onSaveUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    customerNumber: '',
    meterSerialNumber: '',
  });

  useEffect(() => {
    if (editingCustomer) {
      setFormData(editingCustomer);
    }
  }, [editingCustomer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingCustomer) {
      onSaveUpdate({
        ...formData,
        id: editingCustomer.id,
      });
    } else {
      onAddCustomer({
        ...formData,
        id: Date.now(),
      });
    }
    setFormData({
      name: '',
      address: '',
      customerNumber: '',
      meterSerialNumber: '',
    });
  };

  const { name, address, customerNumber, meterSerialNumber } = formData;

  return (
    <center><form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="customerNumber">Customer Number:</label>
        <input
          type="text"
          id="customerNumber"
          name="customerNumber"
          value={formData.customerNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="meterSerialNumber">Meter Serial Number:</label>
        <input
          type="text"
          id="meterSerialNumber"
          name="meterSerialNumber"
          value={formData.meterSerialNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <button type="submit">Add Customer</button>
      </div>
    </form></center>
  );
};

export default CustomerForm;
