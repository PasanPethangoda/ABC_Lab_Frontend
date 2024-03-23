import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Patient from "./pages/patient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Appointment from "./pages/Appointment";
import Token from "./pages/Token";
import Doctor from "./pages/Doctor";
import Technician from "./pages/Technician";
import AllReportsTech from "./pages/AllReports-Tech";
import AllReportsAdmin from "./pages/AllReports-Admin";
import SearchReport from "./pages/Report-Patient";
import AllReportsDoctor from "./pages/AllReports-Doctor";
import PaymentForm from "./pages/Payments";
import PaymentList from "./pages/AllPayments";
import PaymentSearch from "./pages/SearchPayment-Patient";
import AdminLogin from "./pages/AdminLogin";
import DoctorLogin from "./pages/DoctorLogin";
import TechnicianLogin from "./pages/TechnicianLogin";
import LoginPages from "./pages/LoginPages";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/patient" element={<Patient/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/admin" element={<Admin/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/appointment" element={<Appointment/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/token" element={<Token/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/doctor" element={<Doctor/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/tech" element={<Technician/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/all_repots_tech" element={<AllReportsTech/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/all_repots_admin" element={<AllReportsAdmin/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/search_report" element={<SearchReport/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/all_repots_doctor" element={<AllReportsDoctor/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/payments" element={<PaymentForm/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/all_payments" element={<PaymentList/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/search_payments" element={<PaymentSearch/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/admin_login" element={<AdminLogin/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/doctor_login" element={<DoctorLogin/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/tech_login" element={<TechnicianLogin/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/login_pages" element={<LoginPages/>}>
        </Route>
        </Routes>

        <Routes>
          <Route  path="/home" element={<Home/>}>
        </Route>
        </Routes>

        
        




      </Router>
    </div>
  );
}

export default App;
