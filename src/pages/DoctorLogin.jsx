import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './AdminLogin.css'; // Import the stylesheet

const DoctorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Hard-coded admin credentials (for demo purposes only)
    const adminUsername = 'doctor';
    const adminPassword = 'doctorpw';

    if (username === adminUsername && password === adminPassword) {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/lb.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed
      }}
    >

    <div className="con">
      <div className="login-container">
        {loggedIn ? (
          <Navigate to="/doctor" />
        ) : (
          <div>
            <h2 className="h2">Doctor Login</h2>
            <label className="label-1">
              Username:
              <input
                className="input-1"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label className="label-1">
              Password:
              <input
              className="input-1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button className="button-1" onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default DoctorLogin;
