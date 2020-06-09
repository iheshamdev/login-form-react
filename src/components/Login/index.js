import React, { useState } from 'react';
import './style.scss';
import FormField from '../shared/FormField';

const Login = () => {
  return (
    <form noValidate>
      <h1>Login</h1>
      <div className="formBody">
        <FormField
          required={true}
          type="text"
          placeholder="John doe"
          label="Username"
          pattern=".{2,}"
          errorMsg="At least 2 Chars"
        />
        <FormField
          required={true}
          type="password"
          placeholder="Type your password"
          label="Password"
          pattern=".{6,}"
          errorMsg="At least 6 Chars"
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
