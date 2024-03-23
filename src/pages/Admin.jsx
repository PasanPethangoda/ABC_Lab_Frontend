import React from 'react'
import axios from 'axios';
import {useEffect, useState } from "react";
import AdminNav from '../compontents/AdminNav';

function Patient()
{

//Logic

  const [patientid, setId] = useState('');
  const [patientname, setName] = useState("");
  const [patientnic, setNic] = useState("");
  const [patientmail, setEmail] = useState("");
  const [patientdoctor, setDoctor] = useState("");
  const [mobile, setMobile] = useState("");
  const [patients, setUsers] = useState([]);

  

useEffect(() => {
  (async () => await Load())();
  }, []);


  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8080/api/v1/patient/getall");
         setUsers(result.data);
         console.log(result.data);
  }
 
//      async function save(event)
//     {
//         event.preventDefault();
//     try
//         {
//          await axios.post("http://localhost:8080/api/v1/patient/save",
//         {
//           patientname: patientname,
//           patientnic: patientnic,
//           patientmail: patientmail,
//           patientdoctor: patientdoctor,
//           mobile: mobile
//         });
//           alert("Patient Registation Successfully");
//           setId("");
//           setName("");
//           setNic("");
//           setEmail("");
//           setDoctor("");
//           setMobile("");
//           Load();
//         }
//     catch(err)
//         {
//           alert("Patient Registation Failed");
//         }
//    }

   async function editPatient(patients)
   {
    setName(patients.patientname);
    setNic(patients.patientnic);
    setEmail(patients.patientmail);
    setDoctor(patients.patientdoctor);
    setMobile(patients.mobile); 
    setId(patients._id);
   }

   async function DeletePatient(patientid)
   {
        await axios.delete("http://localhost:8080/api/v1/patient/delete/" + patientid); 
        alert("Patient Deleted Successfully");
        Load();
   }

   async function update(event)
   {
    event.preventDefault();

   try
       {
        await axios.put("http://localhost:8080/api/v1/patient/edit/" + patientid,
       {
       
        patientname: patientname,
        patientnic: patientnic,
        patientmail: patientmail,
        patientdoctor : patientdoctor,
        mobile: mobile
       
       });
         alert("Patient Details Updated Successfully");
         setId("");
         setName("");
         setNic("");
         setEmail("");
         setDoctor("");
         setMobile("");
         Load();
       }
   catch(err)
       {
         alert("Patient Updated Failed");
       }
  }
  

  //-----------Appoinment send logic------//

  const [appointmentid, set_AId] = useState('');
  const [pnic, set_ANic] = useState("");
  const [pname, set_AName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tokenNo, setToken] = useState("");
  const [validationError, setValidationError] = useState('');
  const [appointments, set_AUsers] = useState([]);

useEffect(() => {
  (async () => await Load())();
  }, []);


  async function save(event) {
    event.preventDefault();
    try {
      if (!pnic || !pname || !date || !time || !tokenNo) {
        setValidationError('Please fill out all the fields');
        return;
      }

      await axios.post("http://localhost:8080/api/v1/appointment/save", {
        pnic: pnic,
        pname: pname,
        date: date,
        time: time,
        tokenNo: tokenNo
      });

      alert("Appoitment Successfully");
      set_AId("");
      set_ANic("");
      set_AName("");
      setDate("")
      setTime("");
      setToken("");
      setValidationError('');
      Load();
    } catch (err) {
      alert("Appoitment Send  Unsuccessfully");
    }
  }


  // async function save(event)
  //   {
  //       event.preventDefault();
  //   try
  //       {
  //        await axios.post("http://localhost:8080/api/v1/appointment/save",
  //       {
  //         pnic: pnic,
  //         pname: pname,
  //         date: date,
  //         time : time,
  //         tokenNo: tokenNo
  //       });
  //         alert("Appoitment Successfully");
  //         set_AId("");
  //         set_ANic("");
  //         set_AName("");
  //         setDate("");
  //         setTime("");
  //         setToken("");
  //         Load();
  //       }
  //   catch(err)
  //       {
  //         alert("Appoitment Failed");
  //       }
  //  }

   //-----------END Appoinment send logic------//




 
  //-------------Design Part------------//


  return (
    <div>
      <AdminNav/>
 {/*------- Table Start ---------*/}
<div class="container"> 
<h3 class="text-center mt-5"><i>All Patient Details</i></h3> 
<div class="row pt-3">
<table class="table table-primary shadow" align="center">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Patient Name</th>
      <th scope="col">Patient NIC</th>
      <th scope="col">Patient Email</th>
      <th scope="col">Doctor Name</th>
      <th scope="col">Patient Mobile</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {patients.map(function fn(patient)
       {
            return(
            <tbody>
                <tr>
                <td>{patient.patientname}</td>
                <td>{patient.patientnic}</td>
                <td>{patient.patientmail}</td>
                <td>{patient.patientdoctor}</td>
                <td>{patient.mobile}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editPatient(patient)} >Edit</button>  
                    <button type="button" class="btn btn-outline-danger mx-2" onClick={() => DeletePatient(patient._id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
            </div>
            </div>  
         {/*------- Table End ---------*/}

    

       <div class="container  mb-5" >
       <div class="row mt-5 ">
        {/* Start Appointment Form */}
        <div class="col-lg-6 col-md-6 col-sm-12">
        <form class="border p-5 shadow ">
          <h4 class="text-center"><i>Appointment Form</i></h4>
          {validationError && (
        <div class="alert alert-danger mt-2" role="alert">
          {validationError}
        </div>
      )}

              <div class="form-group">
                <label>Patient NIC</label>
                <input  type="text" class="form-control shadow" id="pnic" required
                value={pnic}
                onChange={(event) =>
                  {
                    set_ANic(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Patient Name</label>
                <input  type="text" class="form-control shadow" id="pname" required
                 value={pname}
                  onChange={(event) =>
                    {
                      set_AName(event.target.value);      
                    }}
                />
              </div>


              <div class="form-group">
                <label>Appointment Date</label>
                <input type="date" class="form-control shadow" id="date" required
                  value={date}
                onChange={(event) =>
                  {
                    setDate(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Appointment Time</label>
                <input type="time" class="form-control shadow" id="time" required
                  value={time}
                onChange={(event) =>
                  {
                    setTime(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Token Number</label>
                <input type="text" class="form-control shadow" id="tokenNo" required
                  value={tokenNo}
                onChange={(event) =>
                  {
                    setToken(event.target.value);      
                  }}
                />
              </div>


              <div class="text-center">
              <button   class="btn btn-primary mt-4 px-4"  onClick={save}>Send Appointment</button>
             
              </div>   
            </form>
          </div>
           {/* End Appointment Form */}


         {/*------- Start Patient Update Form ---------*/}
        <div class="col-lg-6 col-md-6 col-sm-12">
        <form class="border p-5 shadow ">
        <h4 class="text-center"><i>Update Patient Details</i></h4> 

              <div class="form-group">
                <label>Patient Name</label>
                <input  type="text" class="form-control shadow" id="patientname"
                value={patientname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Patient NIC</label>
                <input  type="text" class="form-control shadow" id="patientnic" 
                 value={patientnic}
                  onChange={(event) =>
                    {
                      setNic(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Patient Email</label>
                <input  type="text" class="form-control shadow" id="patientmail" 
                 value={patientmail}
                  onChange={(event) =>
                    {
                      setEmail(event.target.value);      
                    }}
                />
              </div>

              <div className="form-group">
                <label>Doctor name</label>
                  <select
                     className="form-control shadow"
                     id="patientdoctor"
                     value={patientdoctor}
                     onChange={(event) => {
                     setDoctor(event.target.value);
                     }}
  >
    <option value="">Select Doctor</option>
    <option value="Dr. Smith Robin">Dr. Smith Robin</option>
    <option value="Dr. Johnson Wood">Dr. Johnson Wood</option>
    <option value="Dr. Joy Peter">Dr. Joy Peter</option>
    
  </select>
</div>


              <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control shadow" id="mobile" 
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />
              </div>


              <div class="text-center">
              <button   class="btn btn-warning mt-4 mx-2"  onClick={update}>Update Details</button>
              </div>   
            </form>
          </div>
          
          {/*------- End Patient Update Form ---------*/}

          </div>
          </div>
         

          

       </div>
            );
        }
 
  
  export default Patient;
