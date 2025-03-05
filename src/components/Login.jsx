import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/calendar");
  };

  return (
    <div className="container">
      <div className="blue-line"></div>
      <div className="header">
        {//<img src={logo} className="logo" alt="Logo" />
}
        <div className="title">Login</div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="input-field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="links">
        <Link to="/signup">Create Account</Link>
      </div>
      <div className="forgotlink">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
}


