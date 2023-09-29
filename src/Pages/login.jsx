import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="container">
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
            name="email" 
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
            name="password" 
            required
          />
          <button className="register-button">Login</button>
          <p>
            Don't Have an Account? <Link to="/register">Register Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
