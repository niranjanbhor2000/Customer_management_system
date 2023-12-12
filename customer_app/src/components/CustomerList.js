import React from 'react';

const CustomerList = ({ customers, onDelete, onUpdate }) => {
  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id}>
          {customer.name} - {customer.address} - {customer.meterSerialNumber}
          <button onClick={() => onDelete(customer.id)}>Delete</button>
          <button onClick={() => onUpdate(customer.id)}>Update</button>
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
