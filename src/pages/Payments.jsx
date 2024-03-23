import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../compontents/Navbar';
import { Link } from 'react-router-dom'


const PaymentForm = () => {
  const [payment, setPayment] = useState({
    name: '',
    patientNIC: '',
    email: '',
    cardType: '',
    price: '',
    cardNumber: '',
    expireDate: '',
    cvv: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Payment Form validation
    if (!payment.name || !payment.email || !payment.cardNumber || !payment.expireDate || !payment.cvv) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Submit form data to the backend
      await axios.post('http://localhost:8080/api/v1/payment/submitForm', payment);
      setError('');
      alert(payment.price + ' Payment successfully!');
      // You can redirect or handle success accordingly
    } catch (err) {
      setError('Error submitting the form. Please try again.');
      console.error(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/lb-1.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '150vh', // Adjust the height as needed
      }}
    >
        <Navbar/>

    <div className="container mt-3 mb-5">
    <Link  to="/search_payments" className="btn justify-content-end btn-outline-dark">
              View Payments
            </Link>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-5">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form className="border shadow-lg p-3 fw-bold" onSubmit={handleSubmit}>
          <h3 className='text-center'>Payment Form</h3>
            <div className="form-group">
              <label>Patient Name:</label>
              <input
                type="text"
                name="name"
                value={payment.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Patient NIC:</label>
              <input
                type="text"
                name="patientNIC"
                value={payment.patientNIC}
                onChange={handleChange}
                placeholder="Enter patient NIC"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={payment.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
            {/* <div className="form-group">
              <label>Card Type:</label>
              <input
                type="text"
                name="cardType"
                value={payment.cardType}
                onChange={handleChange}
                placeholder="Enter card type"
                className="form-control"
              />
            </div> */}
            <div className="form-group">
              <label>Card Type:</label>
              <div className=" fw-bold pl-5 form-check form-check-inline">
                <input
                  type="radio"
                  name="cardType"
                  value="Visa"
                  checked={payment.cardType === 'Visa'}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Visa</label>
              </div>
              <div className=" fw-bold form-check form-check-inline">
                <input
                  type="radio"
                  name="cardType"
                  value="Master"
                  checked={payment.cardType === 'Master'}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Master</label>
              </div>
            </div>

            {/* <div className="form-group">
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={payment.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="form-control"
              />
            </div> */}

<div className="form-group">
  <label>Select Test:</label>
  <select
    name="price"
    value={payment.price}
    onChange={handleChange}
    className="form-control"
  >
    <option value="" disabled>Select Test</option>
    <option value="Blood Test - Rs 1000">Blood Test - Rs 1000</option>
    <option value="Urine Test - Rs 2000">Urine Test - Rs 2000</option>
    <option value="Cortisol Test - Rs 3000">Cortisol Test - Rs 3000</option>
    <option value="Covid-19 PCR Test - Rs 2000">Covid-19 PCR Test - Rs 2000</option>
    {/* Add more options as needed */}
  </select>
</div>

            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={payment.cardNumber}
                onChange={handleChange}
                placeholder="Enter card number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Expire Date:</label>
              <input
                type="text"
                name="expireDate"
                value={payment.expireDate}
                onChange={handleChange}
                placeholder="Enter expire date"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>CVV:</label>
              <input
                type="number"
                name="cvv"
                value={payment.cvv}
                onChange={handleChange}
                placeholder="Enter CVV"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

    </div>
  );
};

export default PaymentForm;
