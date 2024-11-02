// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

const Login = ({ setUserRole }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (email && password) {
      if (role === 'doctor') {
        setUserRole('doctor'); 
        alert('Logged in as Doctor');
        navigate('/doctor'); 
      } else if (role === 'patient') {
        setUserRole('patient'); 
        alert('Logged in as Patient');
        navigate('/patient'); 
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
