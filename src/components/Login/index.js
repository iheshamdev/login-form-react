import React, { useState } from 'react';
import { POST } from '../../common/HTTP_Module';
import './style.scss';
import FormField from '../shared/FormField';
import getCookie from '../../helpers/getCookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      // Call the API & Post the data EX:-
      console.log('Submitted');
      // POST(getCookie('token'), '/user', { username, password });
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
          handleChange={(e) => setUsername(e.target.value)}
        />
        <FormField
          required={true}
          type="password"
          placeholder="Type your password"
          label="Password"
          pattern=".{6,}"
          errorMsg="At least 6 Chars"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="formActions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

//   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
export default Login;
