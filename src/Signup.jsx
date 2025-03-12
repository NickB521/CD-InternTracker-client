import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    navigate("/calendar");
  };

  return (
    <div className="signup-page">
    <div className="main">
    <img 
    src="https://technical.ly/wp-content/uploads/2020/11/code-differently.jpeg" 
    className="logo"
  />
        <h3>Sign-Up</h3>
        <p className="small">Welcome! Please enter your details.</p>
      <form onSubmit={handleSignup}>
        <p>Full Name</p>
          <input className="password" type="text" placeholder="Full Name" required />
          <p>Email</p>
          <input className="email" type="email" placeholder="Email" required />
          <p>Password</p>
          <input className="password" type="password" placeholder="Password" required />
          <p>Confirm Password</p>
          <input className="password" type="password" placeholder="Confirm Password" required />
        <button className="submit" type="submit">Sign-Up</button>
      </form>
      <div className="links">
        <Link to="/login">Already have an account? Login.</Link>
      </div>
    </div>
    </div>
  );
}

export default Signup;
