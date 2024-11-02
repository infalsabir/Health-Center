// src/App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import Home from './home';
import DoctorSchedule from './schedule';
import About from './about';
import Contact from './contact';
import Login from './login';
import PatientInterface from './component/patientInterface';
import DoctorInterface from './component/doctorInterface';
import PatientDashboard from './patientDashboard';
import DoctorDashboard from './doctorDashboard';

import AddAppointmentForm from './appoinmentForm';


function App() {
  const [userRole, setUserRole] = useState('');
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<DoctorSchedule />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
          <Route path="/doctor" element={userRole === 'doctor' ? <DoctorInterface /> : <Home />} />
          <Route path="/patient" element={userRole === 'patient' ? <PatientInterface /> : <Home />} />
       
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/appoinmentform" element={<AddAppointmentForm />} />
       
      </Routes>
      <br></br>
   
      <Footer />
    </Router>
  );
}

export default App;
