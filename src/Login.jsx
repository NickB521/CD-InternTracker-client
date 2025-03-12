import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/calendar");
  };

  return (
    <div className="login-page">
      <div className="main">
      <img 
    src="https://technical.ly/wp-content/uploads/2020/11/code-differently.jpeg" 
    className="logo"
  />
        <h3>Log in to your account</h3>
        <p className="small">Welcome back! Please enter your details.</p>
      <form onSubmit={handleLogin}>
        <p>Email</p>
          <input className="email" type="email" placeholder="Email" required />
          <p>Password</p>
          <input className="password" type="password" placeholder="Password" required />
        <button className="submit" type="submit">Login</button>
      <div className="links">
        <Link to="/signup">Create Account</Link>
      </div>
      <div className="forgotlink">
        <a href="#">Forgot Password?</a>
      </div>
      </form>
    </div>
    </div>
  );
}


export default Login;