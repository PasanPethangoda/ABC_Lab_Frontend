import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../compontents/Navbar';

const PaymentSearch = () => {
  const [patientNIC, setPatientNIC] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/payment/search/${patientNIC}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching payment data:', error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/lb-1.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed
      }}
    >
        <Navbar/>
     {/* Start search option */}
    <div className="container mt-5 mb-3">
    <h3 class="text-center"><i>View Payment Details</i></h3>
        <div className="row justify-content-start">
            <div className="col-md-6">
      <div className="form-group">
      <label class="fw-bold">Enter Patient NIC</label>
        <input
          type="text"
          class="form-control shadow"
          placeholder="Enter Patient NIC"
          value={patientNIC}
          onChange={(e) => setPatientNIC(e.target.value)}
        />
        </div>
        <div>
        <button class="btn btn-outline-primary mt-2 px-4" onClick={handleSearch}>
        SEARCH
        </button>
      </div>
      </div>
      </div>
      </div>
       {/* End search option */}

    {/* Start search Table */}
      <div class="row g-0 p-5">
      <table className="table table-primary border shadow" style={{ width: '100%' }}>
      <thead class="thead-dark" >
      <tr class="text-center">
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
        <tbody class="text-center">
          {searchResults.map(payment => (
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
      {/* End search Table */}
    </div>
  );
};

export default PaymentSearch;

