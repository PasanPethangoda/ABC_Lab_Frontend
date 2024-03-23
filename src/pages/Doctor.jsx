import React from 'react'
import axios from 'axios';
import {useEffect, useState } from "react";
import DoctorNav from '../compontents/DoctorNav';


function Appointment()
{

//Logic

  const [appointmentid, set_AId] = useState('');
  const [pnic, set_ANic] = useState("");
  const [pname, set_AName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tokenNo, setToken] = useState("");
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
 



   async function editAppointment(appointments)
   {
    set_ANic(appointments.pnic);
    set_AName(appointments.pname);
    setDate(appointments.date); 
    setTime(appointments.time); 
    setToken(appointments.tokenNo); 
    set_AId(appointments._id);
   }

   async function DeleteAppointment(appointmentid)
   {
        await axios.delete("http://localhost:8080/api/v1/appointment/delete/" + appointmentid); 
        alert("Appointment Deleted Successfully");
        Load();
   }

   async function update(event)
   {
    event.preventDefault();

   try
       {
        await axios.put("http://localhost:8080/api/v1/appointment/edit/" + appointmentid,
       {
        
        pnic: pnic,
        pname: pname,
        date: date,
        time: time,
        tokenNo: tokenNo
       
       });
         alert("Appoitment Update Successfully");
         set_AId("");
         set_ANic("");
         set_AName("");
         setDate("");
         setTime("");
         setToken("");
         Load();
       }
   catch(err)
       {
         alert("Appoitment update  Failed");
       }
  }




//Design

  return (
    <div>
     <DoctorNav/>

 {/* Start All Appointment Table */}
 <div class="container">
 <h4 class="text-center mt-5"><i>All Appointment Details</i></h4> 
 <div class="row pt-3">
<table class="table table-primary shadow" align="center">
  <thead class="thead-dark">
    <tr>
      <th scope="col" class="text-center">Patient NIC</th>
      <th scope="col" class="text-center">Patient Name</th>
      <th scope="col" class="text-center">Date</th>
      <th scope="col" class="text-center">Time</th>
      <th scope="col" class="text-center">Token No</th>
      
      {/* <th scope="col" class="text-center">Option</th> */}
    </tr>
  </thead>
       {appointments.map(function fn(appointment)
       {
            return(
            <tbody>
                <tr>
                <td class="text-center">{appointment.pnic}</td>
                <td class="text-center">{appointment.pname}</td>
                <td class="text-center">{appointment.date}</td>
                <td class="text-center">{appointment.time}</td>
                <td class="text-center text-danger fw-bold">{appointment.tokenNo}</td>        
                {/* <td class="text-center">
                     <button type="button" class="btn btn-warning"  onClick={() => editAppointment(appointment)} >Edit</button>  
                    <button type="button" class="btn btn-outline-danger mx-2" onClick={() => DeleteAppointment(appointment._id)}>Delete</button> 
                </td> */}
                </tr>
            </tbody>
            );
            })}
            </table>
            </div>
            </div>
            
            {/* End All Appointment Table */}


           
       </div>
            );
        }
 
export default Appointment;

