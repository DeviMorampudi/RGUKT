import React, { useState } from 'react';
import './Signup.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const navigate = useNavigate();

  const { username, email, password, confirmpassword } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (username.length < 2) {
      alert('Username must be at least 2 characters long');
    } else if (password.length < 6 || confirmpassword.length < 6) {
      alert('Password must contain at least 6 characters');
    } else if (password !== confirmpassword) {
      alert('Passwords do not match');
    } else {
      console.log("Here");
      axios.post('http://localhost:3001/register', {
        username, email, password, confirmpassword
      })
      .then(result => {
        console.log(result);
        navigate('/signin');
      })
      .catch(err => console.log(err));

      alert("Register Successfully");
      navigate('/signin');
    }
  };

  return (
    
    <div className="signup-container">
        <h2>Sign Up</h2>
      <center>
        <form onSubmit={submithandler} className="signup-form">
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              value={username}
              onChange={onChange}
              className="form-control"
            />
         
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={onChange}
              className="form-control"
            />
          
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={onChange}
              className="form-control"
            />
          
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              onChange={onChange}
              className="form-control"
            />
            {password !== confirmpassword && (
              <p className="error-text">Passwords do not match</p>
            )}
          </div>
          <button type="submit" className="btnn">Register</button>
          <p className="base">Already have an account?</p>
          <a href="signin" className="login-link">Login</a>
        </form>
      </center>
    </div>
  );
};

export default Signup;
