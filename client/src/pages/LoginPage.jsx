import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!validatePassword(password)) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post('https://chainforged.onrender.com/api/auth/login', { email, password });
      console.log(res.data);
      navigate('/home')
    } catch (err) {
      console.error(err);
      setErrors({ form: 'Invalid email or password' });
      alert("Invalid Email and Password 😳😳😳")
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup'); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }

    if (errors.form) {
      setErrors((prevErrors) => ({ ...prevErrors, form: '' }));
    }
  };

  return (
     <div className='login-container'>
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {errors.form && <p className="error">{errors.form}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="signup-redirect">
        <p>Don't have an account?</p>
        <button onClick={handleSignupRedirect}>Signup</button>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;

