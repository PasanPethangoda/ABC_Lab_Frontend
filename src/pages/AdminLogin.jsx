import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './AdminLogin.css'; // Import the stylesheet

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Hard-coded admin credentials (for demo purposes only)
    const adminUsername = 'admin';
    const adminPassword = 'adminpw';

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
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/lb-1.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed
      }}
    >
    <div className="con">
      <div className="login-container">
        {loggedIn ? (
          <Navigate to="/admin" />
        ) : (
          <div>
            <h2 className="h2">Admin Login</h2>
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

export default AdminLogin;
