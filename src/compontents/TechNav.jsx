import React from 'react'

export default function TechNav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand text-black fw-bold pl-5" href="/tech">LAB TECHNICIAN DASHBORD</a>
    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">

    <li class="nav-item">
          <a class="nav-link active text-black fw-bold pr-5" aria-current="page" href="/all_repots_tech">All Reports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-black pr-4" aria-current="page" href="/login_pages">Log out </a>
        </li>

    </ul>
  </div>
</nav>

    </div>
  )
}