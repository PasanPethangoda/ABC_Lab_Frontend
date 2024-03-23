import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNav from '../compontents/AdminNav';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

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

  return (
    <div>
        <AdminNav/>
       
     <div class="row g-0 p-5">
      <h3 class="text-center pb-3"><i>All Payment Details</i></h3>
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
          {payments.map(payment => (
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
