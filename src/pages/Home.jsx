import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../compontents/Footer';


export default function Home() {
  return (
    <div>


{/* Hero Section */}
<div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to ABC Laboratory</h1>
        <p class="p">Click the Registration button for  the Get Appointment Date And Time with Token Number.</p>
        <Link class="button" to="/patient">REGISTRATION</Link>
      </div>
</div>
{/* Hero Section */}

{/* About Us Section */}
<div className="container mt-5">
    <div className="row">
        <div class="col-lg-6 col-md-12 col-12 pb-3 mt-5">
            <div class="about-img">
            <img variant="top" src="../img/lb-2.jpg" alt='admin img' />
            </div>
        </div>

        <div class="col-lg-6 col-md-12 col-12 ps-lg-2">
            <div class="about-text">
            <h3 class="pb-3 text-center display-6 fw-bold">ABOUT US</h3>
            <p>Welcome to ABC Laboratory, where science meets innovation. Founded on the principles of excellence and integrity, ABC Laboratory is dedicated to advancing research and discovery in various fields. With state-of-the-art facilities and a team of highly skilled professionals, we specialize in providing cutting-edge solutions in areas such as biotechnology, pharmaceuticals, and environmental science. Our commitment to quality and accuracy ensures that our clients receive reliable results and unparalleled service. At ABC Laboratory, we strive to push the boundaries of scientific exploration and make a meaningful impact on the world around us.</p>

            </div>

        </div>
    </div>
</div>
{/* About Us Section */}

{/* Our Team Section */}
<div className="our-team container mt-5 mb-5">
    <div className="row">
      <h3 class="text-center display-6 fw-bold pt-3">OUR TEAM</h3>
      <p class="lead pt-3 text-center">At ABC Laboratory, our dedicated team of experts is the cornerstone of our success. Comprised of passionate scientists, technicians, and researchers, each member brings a wealth of knowledge and experience to the table. </p>
    </div>
    

  <div className="row pt-4 mb-5">
    <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="card shadow">
                <img variant="top" src="../img/dc-1.jpg" alt='admin img' />
                  <div class="card-body text-center">
                    <h5 class="card-title text-center">Dr.Smith Robin</h5>
                  </div>
                 </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="card shadow">
                <img variant="top" src="../img/dc-2.jpg" alt='doctor img'/>
                  <div class="card-body text-center">
                    <h5 class="card-title text-center">Dr.Johnson Wood</h5>
                  </div>
                 </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="card shadow">
                 <img variant="top" src="../img/dc-3.png" alt='tech img'/> 
                  <div class="card-body text-center">
                    <h5 class="card-title text-center">Dr. Joy Peter</h5>
                  </div>
                 </div>
                </div>
    </div>
</div>
{/* Our Team Section */}

{/* Services Section */}
<div class="container mt-5 mb-5">
<h3 class="text-center display-6 fw-bold pt-3">OUR SERVICES</h3>
  <div class="row pt-3">
    <div class="col-md-4">
     <ul class="responsive-list">
        <li class="responsive-list-item shadow">Blood Test</li>
        <li class="responsive-list-item shadow">Dengue Antibody</li>
        <li class="responsive-list-item shadow">Dengue Antigen</li>
        <li class="responsive-list-item shadow">ESR</li>
        <li class="responsive-list-item shadow">Full Blood Count Test</li>
      </ul>
    </div>
    <div class="col-md-4">
      <ul class="responsive-list">
        <li class="responsive-list-item shadow">Cortisol Test</li>
        <li class="responsive-list-item shadow">Hemoglobin Level</li>
        <li class="responsive-list-item shadow">HIV Antibody</li>
        <li class="responsive-list-item shadow">Urine Culture and ABST</li>
        <li class="responsive-list-item shadow">Urine Full Report (UFR)</li>
      </ul>
    </div>
    <div class="col-md-4">
      <ul class="responsive-list">
        <li class="responsive-list-item shadow">Covid-19 Pcr Test</li>
        <li class="responsive-list-item shadow">Eye Surgeon</li>
        <li class="responsive-list-item shadow">Blood Glucose Test</li>
        <li class="responsive-list-item shadow">Hemoglobin A1C (HbA1c)</li>
        <li class="responsive-list-item shadow">Diabetes Tests</li>
      </ul>
    </div>
  </div>
</div>


{/* Services Section */}










<Footer/>
    </div>
  )
}
