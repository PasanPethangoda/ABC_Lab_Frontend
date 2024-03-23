import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold pl-4" href="/">ABC LABORATORY</a>
    <ul class="navbar-nav ml-auto mb-2 mb-lg-0 pr-5">

    <li class="nav-item">
          <a class="nav-link active fw-bold" aria-current="page" href="/patient">Registration</a>
        </li>

    <li class="nav-item">
          <a class="nav-link active fw-bold" aria-current="page" href="/token">Token No</a>
        </li>
    
    <li class="nav-item">
          <a class="nav-link active fw-bold" aria-current="page" href="/payments">Payment</a>
        </li>

    <li class="nav-item">
          <a class="nav-link active fw-bold" aria-current="page" href="/search_report">Reports</a>
        </li>

    

   
    </ul>
    {/* <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

    {/* <button className="btn btn-outline-light">Get Token</button> */}
    
  </div>
</nav>

    </div>
  )
}
