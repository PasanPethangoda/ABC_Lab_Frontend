import React from 'react'
import axios from 'axios';
import {useEffect, useState } from "react";
import Navbar from '../compontents/Navbar';


function Token()
{

//Logic

//   const [appointmentid, set_AId] = useState('');
//   const [pnic, set_ANic] = useState("");
//   const [pname, set_AName] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [tokenNo, setToken] = useState("");
  const [searchPnic, setSearchPnic] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [appointments, set_AUsers] = useState([]);

useEffect(() => {
  (async () => await Load())();
  }, []);


  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8080/api/v1/appointment/getall");
         set_AUsers(result.data);
         console.log(result.data);
  }

  const searchByPnic = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/appointment/search/${searchPnic}`
      );
  
      if (response.data.length === 0) {
        alert('Patient not found');
      } else {
        setSearchResults([response.data]);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Patient not found');
      } else {
        console.error('Error fetching data:', error);
      }
    }
  };
  
 
   





//Design

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/lb.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed
      }}
    >
        <Navbar/>
      {/* Start search option */}
      <div class="container mt-5">
        <h3 class="text-center"><i>Get  Appointment</i></h3>
              <div class="row pt-3">
            <div class="col-lg-6">
              <div class="form-group">
                <label class="fw-bold">Enter Patient NIC</label>
                <input
                  type="text"
                  class="form-control shadow"
                  id="searchPnic"
                  placeholder="Enter Patinet NIC"
                  value={searchPnic}
                  onChange={(event) => setSearchPnic(event.target.value)}
                 />
              </div>
             <button class="btn btn-outline-primary mt-2 px-4" onClick={searchByPnic}>SEARCH</button>
              </div>
            </div>
            </div>
             {/* End search option */}

 {/* Start search Table */}
    <div class="container mt-5">
        <div class=" row mt-4">
          <h3 class="text-center pb-3"><i>Appointment Details</i></h3>
         <table class="table table table-primary shadow">
         <thead class="thead-dark" >
         <tr class="text-center">
        <th>Patient NIC</th>
        <th>Patient Name</th>
        <th>Appointment Date</th>
        <th>Appointment Time</th>
        <th>Token Number</th>
      </tr>
    </thead>
    <tbody class="text-center">
      {searchResults.map((appointment) => (
        <tr key={appointment.appointmentid}>
          <td>{appointment.pnic}</td>
          <td>{appointment.pname}</td>
          <td>{appointment.date}</td>
          <td>{appointment.time}</td>
          <td class="text-danger fw-bold">{appointment.tokenNo}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
 {/* End search Table */}
  
       </div>
            );
        }
 
export default Token;
