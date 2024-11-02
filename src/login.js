// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Optional styling

const Login = ({ setUserRole }) => { // Ensure this is receiving the prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate(); // Use useNavigate from react-router-dom

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email and password (you can add your own logic here)
    if (email && password) {
      if (role === 'doctor') {
        setUserRole('doctor'); // Set user role to doctor
        alert('Logged in as Doctor');
        navigate('/doctor'); // Redirect to Doctor Interface
      } else if (role === 'patient') {
        setUserRole('patient'); // Set user role to patient
        alert('Logged in as Patient');
        navigate('/patient'); // Redirect to Patient Interface
      } else {
        alert('Please select a role');
      }
    } else {
      alert('Please enter valid email and password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="" disabled>Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
