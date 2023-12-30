// ////?*********components/auth/Login.js
import React, { useState } from 'react';
import InputField from '../common/InputField';
import Button from '../common/Button';
import '../common/Form.css'; 
import authService from '../../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await authService.login(email, password);
      console.log('Logged in:', user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (

    <div className="form-container"> {}
  
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form"> {/**/}
        <InputField
          type="email"
          /**/
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
