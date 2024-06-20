import React, { useState } from 'react';
import './Signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const { username, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('Password must contain at least 6 characters');
    } else {
      axios.post('http://localhost:3001/signin', { username, password })
        .then(result => {
          if (result.data === "success") {
            navigate('/');
          } else {
            alert('username or password incorrect');
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="signin-container">
        <h2>Sign in</h2>
      <center>
        <form onSubmit={submithandler} className="signin-form">
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
          
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={onChange}
              className="form-control"
            />
          </div>
          <p className="basee">Forget Password?</p>
          <button type="submit" className="btnn">Login</button>
        </form>
      </center>
    </div>
  );
};

export default Signin;
