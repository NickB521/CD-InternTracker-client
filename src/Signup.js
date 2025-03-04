import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "./assets/codelogo.png";
import "./App.css";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    navigate("/calendar");
  };

  return (
    <div className="container">
      <div className="blue-line"></div>
      <div className="header">
        <img src={logo} className="logo" alt="Logo" />
        <div className="title">Sign-Up</div>
      </div>
      <form onSubmit={handleSignup}>
        <div className="input-field">
          <input type="text" placeholder="Full Name" required />
        </div>
        <div className="input-field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <button type="submit">Sign-Up</button>
      </form>
      <div className="links">
        <Link to="/login">Already have an account? Login.</Link>
      </div>
    </div>
  );
}

export default Signup;
