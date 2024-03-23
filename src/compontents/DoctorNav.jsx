import React from 'react'

export default function DoctorNav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-success">
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold pl-4" href="/doctor">DOCTOR DASHBORD</a>
    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">

    
    <li class="nav-item">
          <a class="nav-link active text-white fw-bold pr-5" aria-current="page" href="/all_repots_doctor">All Patient Reports</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active text-white pr-4" aria-current="page" href="/login_pages">Log out </a>
        </li>

    </ul>
  </div>
</nav>

    </div>
  )
}