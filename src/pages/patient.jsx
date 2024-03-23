import axios from 'axios';
import {useEffect, useState } from "react";
import Navbar from '../compontents/Navbar';

function Patient()
{

//Logic

  const [patientid, setId] = useState('');
  const [patientname, setName] = useState("");
  const [patientnic, setNic] = useState("");
  const [patientmail, setEmail] = useState("");
  const [patientdoctor, setDoctor] = useState("");
  const [mobile, setMobile] = useState("");
  const [validationError, setValidationError] = useState('');
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


  async function save(event) {
    event.preventDefault();
    try {
      if (!patientname || !patientnic || !patientmail || !patientdoctor || !mobile) {
        setValidationError('Please fill out all the fields');
        return;
      }

      await axios.post("http://localhost:8080/api/v1/patient/save", {
          patientname: patientname,
          patientnic: patientnic,
          patientmail: patientmail,
          patientdoctor: patientdoctor,
          mobile: mobile
      });

      alert("Patient Registration Successfully");
      setId("");
      setName("");
      setNic("");
      setEmail("");
      setDoctor("");
      setMobile("");
      setValidationError('');
      Load();
    } catch (err) {
      alert("Patient Registration Failed");
    }
  }


  
  



 
  //    async function save(event)
  //   {
  //       event.preventDefault();
  //   try
  //       {
  //        await axios.post("http://localhost:8080/api/v1/patient/save",
  //       {
  //         patientname: patientname,
  //         patientnic: patientnic,
  //         patientmail: patientmail,
  //         patientdoctor: patientdoctor,
  //         mobile: mobile
  //       });
  //         alert("Patient Registation Successfully");
  //         setId("");
  //         setName("");
  //         setNic("");
  //         setEmail("");
  //         setDoctor("");
  //         setMobile("");
  //         Load();
  //       }
  //   catch(err)
  //       {
  //         alert("Patient Registation Failed");
  //       }
  //  }

  //  async function editPatient(patients)
  //  {
  //   setName(patients.patientname);
  //   setNic(patients.patientnic);
  //   setEmail(patients.patientmail);
  //   setDoctor(patients.patientdoctor);
  //   setMobile(patients.mobile); 
  //   setId(patients._id);
  //  }

  //  async function DeletePatient(patientid)
  //  {
  //       await axios.delete("http://localhost:8080/api/v1/patient/delete/" + patientid); 
  //       alert("Patient Deleted Successfully");
  //       Load();
  //  }

  //  async function update(event)
  //  {
  //   event.preventDefault();

  //  try
  //      {
  //       await axios.put("http://localhost:8080/api/v1/patient/edit/" + patientid,
  //      {
       
  //       patientname: patientname,
  //       patientnic: patientnic,
  //       patientmail: patientmail,
  //       patientdoctor : patientdoctor,
  //       mobile: mobile
       
  //      });
  //        alert("Patient Registation Updated");
  //        setId("");
  //        setName("");
  //        setNic("");
  //        setEmail("");
  //        setDoctor("");
  //        setMobile("");
  //        Load();
  //      }
  //  catch(err)
  //      {
  //        alert("Patient Updated Failed");
  //      }
  // }

  //------Appointment Search Option--------
  
  
//------Appointment Search Option--------
  



  //Design


  return (

    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/lb.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '110vh', // Adjust the height as needed
      }}
    >
      <Navbar/>
       {/*------- Start Registration Form ---------*/}
       <div class="container mt-4 mb-5" >
        <div class="row pt-2 justify-content-center">
        <div class="col-lg-6">
          <form class="border border-dark p-3 shadow ">
          <h4 class="text-center pb-2"><i>Patient Registration</i></h4>
          {validationError && (
        <div class="alert alert-danger mt-2" role="alert">
          {validationError}
        </div>
      )}

              <div class="form-group">
                <label class="fw-bold">Patient Name</label>
                <input  type="text" class="form-control shadow" id="patientname" required
                value={patientname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label class="fw-bold">Patient NIC</label>
                <input  type="text" class="form-control shadow" id="patientnic" required
                 value={patientnic}
                  onChange={(event) =>
                    {
                      setNic(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label class="fw-bold">Patient Email</label>
                <input  type="text" class="form-control shadow" id="patientmail" required
                 value={patientmail}
                  onChange={(event) =>
                    {
                      setEmail(event.target.value);      
                    }}
                />
              </div>

              <div className="form-group">
                <label class="fw-bold">Doctor name</label>
                  <select
                     className="form-control shadow"
                     id="patientdoctor" 
                     required
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
                <label class="fw-bold">Mobile</label>
                <input type="number" class="form-control shadow" id="mobile" required
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />
              </div>


              <div>
              <button   class="btn btn-primary mt-2 " id="submit" onClick={save}>Register</button>
             
              </div>   
            </form>
          </div>
          </div>
          </div>
{/*------- End Registration Form ---------*/}
         

 
       </div>
            );
        }
 
  
  export default Patient;