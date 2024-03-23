import React from 'react'

export default function AdminNav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-info">
  <div className="container-fluid">
  <a className="navbar-brand text-black fw-bold pl-4" href="/admin">ADMIN DASHBORD</a>
    <ul class="navbar-nav ml-auto mb-2 mb-lg-0 pr-4">

    <li class="nav-item">
          <a class="nav-link active text-black fw-bold " aria-current="page" href="/appointment">Appointments</a>
        </li>

    <li class="nav-item">
          <a class="nav-link active text-black fw-bold " aria-current="page" href="/all_repots_admin">Patient Reports</a>
        </li>

    <li class="nav-item">
          <a class="nav-link active text-black fw-bold " aria-current="page" href="/all_payments">All Payments </a>
        </li>

        <li class="nav-item">
          <a class="nav-link active text-black " aria-current="page" href="/login_pages">Log out</a>
        </li>

    </ul>
  </div>
</nav>

    </div>
  )
}