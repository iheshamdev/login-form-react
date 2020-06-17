import './style.scss';
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import FormField from '../shared/FormField';
import Register from '../register';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      alert('Form Submitted');
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="formBody">
        <FormField
          required={true}
          type="text"
          placeholder="John doe"
          label="Username"
          pattern=".{2,}"
          errorMsg="At least 2 Chars"
          value={username}
          handleChange={e => setUsername(e.target.value)}
        />
        <FormField
          required={true}
          type="password"
          placeholder="Type your password"
          label="Password"
          pattern=".{6,}"
          errorMsg="At least 6 Chars"
          value={password}
          handleChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="formActions">
        <button type="submit">Submit</button>
      </div>
      <Link to="/register">Register</Link>
    </form>
  );
};

export default Login;
