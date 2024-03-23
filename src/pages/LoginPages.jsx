import React from 'react'


export default function LoginPages() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/lb.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed
      }}
    >
        <div className="container">
            <div className="row p-5">
            <h2 className="text-center pb-4">ABC LABORATORY</h2>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="card">
                <img variant="top" src="../img/ad-1.jpg" alt='admin img' />
                  <div class="card-body text-center">
                    <h5 class="card-title text-center">Admin Login</h5>
                       <a href="/admin_login" class="btn btn-primary px-3">Login</a>
                  </div>
                 </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="card">
                <img variant="top" src="../img/doc-1.jpg" alt='doctor img'/>
                  <div class="card-body text-center">
                    <h5 class="card-title text-center">Doctor Login</h5>
                       <a href="/doctor_login" class="btn btn-success px-3">Login</a>
                  </div>
                 </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="card">
                 <img variant="top" src="../img/tech-1.jpg" alt='tech img'/> 
                  <div class="card-body text-center">
                    <h5 class="card-title text-center">Lab Technician Login</h5>
                       <a href="/tech_login" class="btn btn-warning px-3">Login</a>
                  </div>
                 </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
