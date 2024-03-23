import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNav from '../compontents/AdminNav';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [searchNIC, setSearchNIC] = useState('');

  useEffect(() => {
    // Fetch all payment data when the component mounts
    axios.get('http://localhost:8080/api/v1/payment/getAllPayment')
      .then(response => {
        setPayments(response.data);
      })
      .catch(error => {
        console.error('Error fetching payment data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  const handleSearchChange = (event) => {
    setSearchNIC(event.target.value);
  };

  const filteredPayments = payments.filter(payment =>
    payment.patientNIC.toLowerCase().includes(searchNIC.toLowerCase())
  );


  return (
    <div>
        <AdminNav/>
       
     <div class="row g-0 p-5">
      <h3 class="text-center pb-3"><i>All Payment Details</i></h3>
      <div className="mb-3" style={{ width: '30%' }}>
          <input
            type="text"
            className="form-control border border-dark"
            placeholder="Search"
            value={searchNIC}
            onChange={handleSearchChange}
          />
        </div>
      <table className="table table-primary border shadow mx-auto" style={{ width: '100%' }}>
        <thead className="thead-dark">
          <tr className="text-center">
            <th>Name</th>
            <th>Patient NIC</th>
            <th>Email</th>
            <th>Card Type</th>
            <th>Payment</th>
            {/* <th>Card Number</th>
            <th>Expire Date</th>
            <th>CVV</th> */}
          </tr>
        </thead>
        <tbody className="text-center">
         {filteredPayments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.name}</td>
              <td>{payment.patientNIC}</td>
              <td>{payment.email}</td>
              <td>{payment.cardType}</td>
              <td>{payment.price}</td>
              {/* <td>{payment.cardNumber}</td>
              <td>{payment.expireDate}</td>
              <td>{payment.cvv}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     

    </div>
  );
};

export default PaymentList;
