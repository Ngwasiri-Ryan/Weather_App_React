// components/Login.js
import React, { useState } from 'react';
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', username, password);
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Signing up with:', username, password);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button-group">
          <button type="button" onClick={handleLogin}>Login</button>
          <button type="button" onClick={handleSignUp}>Sign Up</button>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
